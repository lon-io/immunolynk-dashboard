import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './BasicApp';

const ClientApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default ClientApp;
