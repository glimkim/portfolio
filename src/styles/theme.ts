import { Colors } from '@emotion/react';
import { PageTheme } from 'context/pageTheme';

const theme: { [key in PageTheme]: Colors } = {
  default: {
    keyColor: '#EBFFEB',
    pointColor: '#CFFFCF',
    title: '#333333',
    font: '#333333',
    border: '#333333',
    shadow: '#33333360',
    button: {
      default: '#EBFFEB',
      sub: '#ffffff',
      shadow: '#333333',
      font: '#333333',
    },
  },
  dark: {
    keyColor: '#333333',
    pointColor: '#C8E3C8',
    title: '#CCCCCC',
    font: '#EDEDED',
    border: '#666666',
    shadow: '#CCCCCC40',
    button: {
      default: '#EDEDED',
      sub: '#EDEDED',
      shadow: '#CCCCCC',
      font: '#333333',
    },
  },
};

export const getTheme = (themeType: PageTheme) => {
  return { colors: theme[themeType] };
};
