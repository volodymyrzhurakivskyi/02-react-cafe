import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './style.css'; // Твій файл стилів без літери 'index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);