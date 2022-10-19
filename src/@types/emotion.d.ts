import '@emotion/react';

declare module '@emotion/react' {
  export type Mode = 'default' | 'dark';
  export interface Colors {
    keyColor: string;
    title: string;
    font: string;
    border: string;
  }
  export interface Theme {
    colors: Colors;
  }
}
