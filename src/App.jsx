import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { AuthProvider } from './Context/AuthContext';

const theme = {
  bgColors: {
    character: '#bcfcbc',
    index: '#FFFFFF',
  },
  colors: {
    red: '#d70000',
  },
};

export const App = () => (
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </AuthProvider>
);

export default App;
