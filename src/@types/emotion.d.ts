import '@emotion/react';

declare module '@emotion/react' {
  export type Mode = 'default' | 'dark';
  export interface Colors {
    keyColor: string;
    pointColor: string;
    title: string;
    font: string;
    border: string;
    shadow: string;
    button: {
      default: string;
      sub: string;
      shadow: string;
      font: string;
      hoverBg: string;
    };
    footer: string;
    icon: string;
  }
  export interface Theme {
    colors: Colors;
  }
}
