import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle, theme } from './global-styles';
import RoutesList from '../__Routes';

const App = () => {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyle />
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
