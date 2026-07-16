/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import fs from 'fs';
import { google } from 'googleapis';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Local data storage helpers
const DATA_DIR = path.join(process.cwd(), 'data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function getLocalSubmissions(): any[] {
  ensureDataDir();
  if (!fs.existsSync(SUBMISSIONS_FILE)) {
    return [];
  }
  try {
    const content = fs.readFileSync(SUBMISSIONS_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    console.error('Error reading submissions file:', err);
    return [];
  }
}

function saveLocalSubmissions(submissions: any[]) {
  ensureDataDir();
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), 'utf-8');
}

// Lazy sheets client initialization
let sheetsClient: any = null;

function getSheetsClient() {
  if (sheetsClient) return sheetsClient;

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !privateKey) {
    throw new Error('Google Sheets API credentials are not configured.');
  }

  const formattedKey = privateKey.replace(/\\n/g, '\n');

  const auth = new google.auth.JWT({
    email,
    key: formattedKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  sheetsClient = google.sheets({ version: 'v4', auth });
  return sheetsClient;
}

async function appendToGoogleSheet(data: any) {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  if (!spreadsheetId) {
    throw new Error('GOOGLE_SPREADSHEET_ID is not configured.');
  }

  const sheets = getSheetsClient();
  const values = [
    [
      data.studentName,
      data.parentName,
      data.age,
      data.country,
      data.city,
      data.whatsapp,
      data.email,
      data.selectedCourse,
      data.timing,
      data.message || '',
      new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' }) + ' PKT'
    ]
  ];

  // Try appending to the default first sheet or 'Sheet1'
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:K',
      valueInputOption: 'RAW',
      requestBody: { values }
    });
  } catch (err) {
    console.warn('Failed appending to Sheet1, trying general range A:K', err);
    // Fallback to general range without specific sheet name
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:K',
      valueInputOption: 'RAW',
      requestBody: { values }
    });
  }
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// GET endpoint to retrieve submissions (useful for local admin or verification)
app.get('/api/admin/submissions', (req, res) => {
  const submissions = getLocalSubmissions();
  res.json({
    count: submissions.length,
    googleSheetsConfigured: !!(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SPREADSHEET_ID),
    submissions
  });
});

app.post('/api/admission', async (req, res) => {
  try {
    const {
      studentName,
      parentName,
      age,
      country,
      city,
      whatsapp,
      email,
      selectedCourse,
      timing,
      message
    } = req.body;

    // Validation
    if (!studentName || !parentName || !age || !country || !city || !whatsapp || !email || !selectedCourse || !timing) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be completed.'
      });
    }

    // Prevent duplicates
    const submissions = getLocalSubmissions();
    const isDuplicate = submissions.some(sub => 
      sub.email.toLowerCase() === email.toLowerCase() && 
      sub.selectedCourse === selectedCourse
    );

    if (isDuplicate) {
      return res.status(400).json({
        success: false,
        code: 'DUPLICATE',
        message: 'An application with this email address for this specific course has already been submitted.'
      });
    }

    const newSubmission = {
      id: Date.now().toString(),
      studentName,
      parentName,
      age,
      country,
      city,
      whatsapp,
      email,
      selectedCourse,
      timing,
      message: message || '',
      submittedAt: new Date().toISOString()
    };

    // Save locally first (local fallback database)
    submissions.push(newSubmission);
    saveLocalSubmissions(submissions);

    // Save to Google Sheet if credentials exist
    let googleSheetSaved = false;
    let googleSheetError = null;

    const hasGoogleCredentials = !!(
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SPREADSHEET_ID
    );

    if (hasGoogleCredentials) {
      try {
        await appendToGoogleSheet(newSubmission);
        googleSheetSaved = true;
      } catch (err: any) {
        console.error('Error writing to Google Sheet:', err);
        googleSheetError = err.message || 'Google Sheets API error';
      }
    } else {
      console.log('Google Sheets credentials not fully configured. Stored locally in submissions.json.');
    }

    return res.json({
      success: true,
      message: 'JazakAllahu Khair! Your admission request has been received successfully. We will contact you soon via WhatsApp or Email, In Sha Allah.',
      googleSheetSaved,
      googleSheetError,
      storedLocally: true
    });

  } catch (err: any) {
    console.error('Admission API internal error:', err);
    return res.status(500).json({
      success: false,
      message: 'An internal server error occurred while processing your request.'
    });
  }
});

// Vite middleware or static serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
    console.log('Vite development server middleware integrated.');
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log('Production static file serving configured.');
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();
