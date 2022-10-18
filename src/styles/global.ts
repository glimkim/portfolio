import { css } from '@emotion/react';
import { resetCss } from './reset';

export const pageWidth = '1440px';
export const HeaderHeight = '60px';
export const DrawerWidthClosed = '80px';
export const DrawerWidthOpen = '240px';

export const globalStyles = css`
  ${resetCss};
  @font-face {
    font-family: 'BlackHanSans';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: url(./fonts/BlackHanSans-Regular.woff2) format('woff2'),
      url(./fonts/BlackHanSans-Regular.woff) format('woff'),
      url(./fonts/BlackHanSans-Regular.ttf) format('truetype');
  }

  * {
    font-family: 'BlackHanSans', sans-serif;
    font-size: 1rem;
  }

  @media screen and (min-width: 1440px) {
    html {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 1080px) {
    html {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 767px) {
    html {
      font-size: 14px;
    }
  }
`;
