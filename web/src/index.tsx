import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { config as i18nextConfig } from './Localization/index';
import { Provider } from 'react-redux';
import store from './Redux/store';
import 'Assets/fonts/Roboto/Roboto-Regular.ttf';
import 'antd/dist/antd.css';

i18next.init(i18nextConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
