import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';

export const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
