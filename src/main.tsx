import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.tsx';
import { IntlProvider } from 'react-intl';
import { LOCALES, messages } from './translations/index.ts';
import { messagesI } from './types/index.ts';
import './styles/index.css';
import { ModalContextProvider } from './context/modal/modalContext.tsx';

const i18nConfig: { locale: keyof messagesI } = {
  locale: navigator.languages[0] !== 'en' ? 'en' : 'en',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider
      messages={messages[i18nConfig.locale]}
      locale={i18nConfig.locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <ModalContextProvider>
        <RouterProvider router={router} />
      </ModalContextProvider>
    </IntlProvider>
  </React.StrictMode>
);
