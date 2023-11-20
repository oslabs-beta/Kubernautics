import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import styles from '../assets/styles.scss';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
