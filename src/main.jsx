// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 IMPORTAÇÃO CORRIGIDA DO REACTDOM
import App from './App.jsx';
import './index.css';
import { PictureProvider } from './contexts/PictureProvider.jsx'; 
// A importação do Provider está correta se você seguiu o passo de renomeação.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PictureProvider>
      <App />
    </PictureProvider>
  </React.StrictMode>,
);