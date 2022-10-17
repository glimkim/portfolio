import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      keyColor: string;
      dark100: string;
    };
  }
}
