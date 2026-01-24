import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@app/styles/main.scss';
import { App } from '@app/App';
import { BrowserRouter } from 'react-router-dom';
import '@shared/lib/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
