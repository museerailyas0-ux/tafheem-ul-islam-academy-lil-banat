# Google Sheets Integration Setup Guide

This web application includes a secure, server-to-server integration that automatically saves student admission requests to a Google Spreadsheet.

To make this integration active, follow these step-by-step instructions.

---

## 📋 Table of Contents
1. [Create a Google Spreadsheet](#1-create-a-google-spreadsheet)
2. [Set up a Google Service Account (Free)](#2-set-up-a-google-service-account-free)
3. [Share the Spreadsheet with your Service Account](#3-share-the-spreadsheet-with-your-service-account)
4. [Add Environment Variables in AI Studio](#4-add-environment-variables-in-ai-studio)
5. [Verify Setup](#5-verify-setup)

---

### 1. Create a Google Spreadsheet

1. Open [Google Sheets](https://sheets.google.com) and create a **New Blank Spreadsheet**.
2. Name it (e.g., `Tafheem Admissions`).
3. Set the first row (headers) in `Sheet1` as follows to match the form fields:
   * **Column A**: `Student Full Name`
   * **Column B**: `Parent / Guardian Name`
   * **Column C**: `Age`
   * **Column D**: `Country`
   * **Column E**: `City`
   * **Column F**: `WhatsApp Number`
   * **Column G**: `Email Address`
   * **Column H**: `Selected Course`
   * **Column I**: `Preferred Class Timing`
   * **Column J**: `Additional Message`
   * **Column K**: `Submission Date & Time`
4. Copy the **Spreadsheet ID** from the browser address bar. It is the long string of letters and numbers in the URL:
   `https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit#gid=0`
   *(This will be your `GOOGLE_SPREADSHEET_ID`)*

---

### 2. Set up a Google Service Account (Free)

To let the server write to your Google Spreadsheet securely without exposing any login details:

1. Open the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Search for **Google Sheets API** in the search bar at the top, select it, and click **Enable**.
4. Navigate to **IAM & Admin** > **Service Accounts** in the left sidebar.
5. Click **+ Create Service Account** at the top.
6. Provide a name (e.g., `tafheem-admissions-service`) and click **Create and Continue**.
7. Skip optional roles (click **Done**).
8. In the Service Accounts list, click on your newly created service account email.
9. Go to the **Keys** tab, click **Add Key** > **Create New Key**, select **JSON**, and click **Create**.
10. A `.json` file will automatically download to your computer. Open this file using a text editor (like Notepad, TextEdit, or VS Code).
11. Note down:
    * `client_email` *(This will be your `GOOGLE_SERVICE_ACCOUNT_EMAIL`)*
    * `private_key` *(This will be your `GOOGLE_PRIVATE_KEY`)*

---

### 3. Share the Spreadsheet with your Service Account

For the service account to write to your spreadsheet, it must be granted access:

1. Open your Google Spreadsheet.
2. Click the green **Share** button in the top right corner.
3. Paste the `client_email` of your service account (e.g., `tafheem-admissions-service@...iam.gserviceaccount.com`).
4. Set the role to **Editor**.
5. Uncheck "Notify people" and click **Share**.

---

### 4. Add Environment Variables in AI Studio

To make these keys accessible to your app's server, configure them in the **Settings / Secrets Manager** menu inside Google AI Studio:

Add the following environment variables:

| Variable Name | Description | Example / Format |
| :--- | :--- | :--- |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | The service account client email | `tafheem-admissions-service@project-name.iam.gserviceaccount.com` |
| `GOOGLE_PRIVATE_KEY` | The full private key (including BEGIN/END headers) | `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC...` |
| `GOOGLE_SPREADSHEET_ID` | The ID of your spreadsheet | `1aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890` |

> ⚠️ **IMPORTANT NOTE FOR PRIVATE KEY**:
> Make sure the private key is inserted either as a single line with `\n` character strings representation OR is formatted properly with actual line breaks. The server is configured to automatically format `\n` strings correctly.

---

### 5. Verify Setup

1. Open the application.
2. Click the **Apply for Admission** button in the navigation bar or Hero banner to open the popup modal.
3. Fill in the form and click **Submit Admission Request**.
4. If everything is configured correctly, your spreadsheet will instantly receive a new row!
5. **Local Fallback Protection**: If credentials are not yet set up, the application will **not** crash. It saves submissions to a local backup file (`/data/submissions.json`) inside the workspace so that no application data is ever lost.
