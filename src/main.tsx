import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.tsx';
import './styles/index.css';
import { IntlProvider } from 'react-intl';
import { LOCALES, messages } from './translations/index.ts';
import { LocaleI } from './types/index.ts';

console.log();
const i18nConfig = {
  locale: navigator.languages[0] !== 'en' ? 'en' : 'en',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider
      messages={messages[i18nConfig.locale]}
      locale={i18nConfig.locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <RouterProvider router={router} />
    </IntlProvider>
  </React.StrictMode>
);
