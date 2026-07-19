import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { LanguageProvider } from './LanguageContext';
import './index.css';
import logoUrl from './assets/images/official_logo.jpg';

// Dynamically set the favicon using the imported logo to keep single source of truth
const favicon = document.getElementById('favicon') as HTMLLinkElement;
if (favicon) {
  favicon.href = logoUrl;
} else {
  const link = document.createElement('link');
  link.type = 'image/jpeg';
  link.rel = 'icon';
  link.href = logoUrl;
  document.head.appendChild(link);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);

