import { Colors } from '@emotion/react';
import { PageTheme } from 'context/pageTheme';

const theme: { [key in PageTheme]: Colors } = {
  default: {
    keyColor: '#DDFFDD',
    pointColor: '#C9FFC9',
    title: '#333333',
    font: '#333333',
    border: '#333333',
    shadow: '#33333360',
    button: {
      default: '#DDFFDD',
      sub: '#ffffff',
      shadow: '#333333',
      font: '#333333',
      hoverBg: '',
    },
    footer: '#C9FFC9',
    icon: '#333333',
  },
  dark: {
    keyColor: '#0F0F0F',
    pointColor: '#C8E3C8',
    title: '#C8E3C8',
    font: '#CCCCCC',
    border: '#C8E3C870',
    shadow: '#CCCCCC40',
    button: {
      default: '#0F0F0F',
      sub: '#0F0F0F',
      shadow: '#C8E3C8',
      font: '#CCCCCC',
      hoverBg: '#333333',
    },
    footer: '#333333',
    icon: '#C8E3C8',
  },
};

export const getTheme = (themeType: PageTheme) => {
  return { colors: theme[themeType] };
};
