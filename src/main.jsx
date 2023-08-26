import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

// const theme = {
//   infoColor: '#82716C',
//   primaryColor: '#E0007F',
//   successColor: '#4B9BA8',
//   warningColor: '#D85446',
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
  </React.StrictMode>,
);
