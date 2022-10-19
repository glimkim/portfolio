import React, { HTMLAttributes, useContext } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as DefaultLogo } from 'assets/images/logo_default.svg';
import { ReactComponent as DarkLogo } from 'assets/images/logo_dark.svg';
import { PageTheme, PageThemeContext } from 'context/pageTheme';

function Logo() {
  const pageTheme = useContext(PageThemeContext);

  return (
    <StyledLogo>
      {pageTheme === 'default' ? <DefaultLogo /> : <DarkLogo />}
    </StyledLogo>
  );
}

const StyledLogo = styled.h1`
  height: 32px;
  svg {
    height: 100%;
  }
`;

export default Logo;
