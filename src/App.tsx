import { Global, ThemeProvider } from '@emotion/react';
import HeaderStateProvider from 'context/header';
import Home from 'pages';
import React from 'react';
import { globalStyles } from 'styles/global';
import { theme } from 'styles/theme';

function App() {
  return (
    <HeaderStateProvider>
      <ThemeProvider theme={theme}>
        <Home />
        <Global styles={globalStyles} />
      </ThemeProvider>
    </HeaderStateProvider>
  );
}

export default App;
