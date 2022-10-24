import React, { useContext, useMemo } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import HeaderStateProvider from 'context/header';
import { PageThemeContext } from 'context/pageTheme';
import Home from 'pages';
import { getGlobalStyles } from 'styles/global';
import { getTheme } from 'styles/theme';

function App() {
  const mode = useContext(PageThemeContext);
  const theme = useMemo(() => {
    return getTheme(mode);
  }, [mode, getTheme]);

  return (
    <HeaderStateProvider>
      <ThemeProvider theme={theme}>
        <Home />
        <Global styles={() => getGlobalStyles(theme)} />
      </ThemeProvider>
    </HeaderStateProvider>
  );
}

export default App;
