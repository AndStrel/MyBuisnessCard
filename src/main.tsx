import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import '@styles/main.scss';
import { App } from '@components/app';
import store from '@utils/store/store';
import { HashRouter } from 'react-router-dom';
import './utils/i18n';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>
  </Provider>,
);
