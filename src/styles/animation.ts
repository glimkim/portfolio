import { css } from '@emotion/react';

export const scaleX0to1 = css`
  animation-name: scaleX0to1;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;

  transform: scaleX(0);
  transform-origin: left center;
`;

export const appearFromLeft = (transition: number, delay = 0) => {
  return css`
    animation-name: appearFromLeft;
    animation-duration: ${`${transition}ms`};
    animation-fill-mode: forwards;
    animation-delay: ${`${delay}ms`};

    transform: translateX(-50px);
    transform-origin: center;
    opacity: 0;
  `;
};

export const appearFromBottom = (transition: number, delay = 0) => {
  return css`
    animation-name: appearFromBottom;
    animation-duration: ${`${transition}ms`};
    animation-fill-mode: forwards;
    animation-delay: ${`${delay}ms`};

    transform: translateY(50px);
    transform-origin: center;
    opacity: 0;
  `;
};

export const fadeIn = (transition: number, delay = 0) => {
  return css`
    animation-name: fadeIn;
    animation-duration: ${`${transition}ms`};
    animation-fill-mode: forwards;
    animation-delay: ${`${delay}ms`};

    transform: translateX(-50px);
    transform-origin: center;
    opacity: 0;
  `;
};

export const upNdown = (transition: number, delay = 0) => {
  return css`
    animation-name: upNdown;
    animation-duration: ${`${transition}ms`};
    animation-fill-mode: forwards;
    animation-delay: ${`${delay}ms`};

    transform-origin: center;
    // transform: translateY(-300px);
  `;
};
