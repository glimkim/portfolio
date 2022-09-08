import { Global, ThemeProvider } from '@emotion/react';
import Home from 'pages/home';
import React from 'react';
import { globalStyles } from 'styles/global';
import { theme } from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <Global styles={globalStyles} />
    </ThemeProvider>
  );
}

export default App;
