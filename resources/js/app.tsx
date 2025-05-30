import React from 'react';
import ReactDOM from 'react-dom/client';
import CurrencyManager from './pages/CurrencyManager';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <CurrencyManager />
  </React.StrictMode>
);