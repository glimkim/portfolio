import { css, Theme } from '@emotion/react';
import { resetCss } from './reset';

export const pageWidth = '1440px';
export const headerHeight = '60px';
export const drawerWidthClosed = '70px';
export const drawerWidthOpen = '240px';

export const getGlobalStyles = (theme: Theme) => {
  return css`
    ${resetCss};

    * {
      font-family: 'IBM Plex Mono', sans-serif;
      font-size: 1rem;
      color: ${theme.colors.font};
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

    @keyframes scaleX0to1 {
      from {
        transform: scaleX(0);
      }
      to {
        transform: scaleX(1);
      }
    }

    @keyframes appearFromLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes appearFromBottom {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes upNdown {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-50px);
      }
      100% {
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `;
};
