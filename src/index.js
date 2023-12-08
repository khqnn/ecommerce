import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthWrapper from './auth/AuthWrapper';
import BusinessWrapper from './theme/BusinessWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BusinessWrapper>
        <AuthWrapper>

          <App />
        </AuthWrapper>
      </BusinessWrapper>
    </BrowserRouter>
  </React.StrictMode>

);
