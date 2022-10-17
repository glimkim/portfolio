import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import LogoBasic from 'assets/images/logo_basic.png';
import LogoDark from 'assets/images/logo_dark.png';
import { PageTheme } from 'styles/theme';

interface LogoProps extends HTMLAttributes<HTMLHeadingElement> {
  theme?: PageTheme;
}

function Logo({ theme = 'basic' }: LogoProps) {
  return (
    <StyledLogo>
      {theme === 'basic' ? (
        <img src={LogoBasic} alt="logo img" />
      ) : (
        <img src={LogoDark} alt="logo img" />
      )}
    </StyledLogo>
  );
}

const StyledLogo = styled.h1`
  height: 48px;
  line-height: 48px;

  img {
    height: 100%;
  }
`;

export default Logo;
