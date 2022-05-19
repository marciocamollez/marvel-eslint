import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';

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
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
