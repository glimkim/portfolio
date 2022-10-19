import React, { useContext } from 'react';
import { Colors, Global, ThemeProvider } from '@emotion/react';
import HeaderStateProvider from 'context/header';
import { PageTheme, PageThemeContext } from 'context/pageTheme';
import Home from 'pages';
import { getGlobalStyles } from 'styles/global';

function App() {
  const mode = useContext(PageThemeContext);
  const pageTheme: { [key in PageTheme]: Colors } = {
    default: {
      keyColor: '#D1FFD1',
      title: '#333333',
      font: '#333333',
      border: '#333333',
    },
    dark: {
      keyColor: '#0F0F0F',
      title: '#CCCCCC',
      font: '#CCCCCC',
      border: '#666666',
    },
  };

  return (
    <HeaderStateProvider>
      <ThemeProvider theme={{ colors: pageTheme[mode] }}>
        <Home />
        <Global styles={() => getGlobalStyles({ colors: pageTheme[mode] })} />
      </ThemeProvider>
    </HeaderStateProvider>
  );
}

export default App;
