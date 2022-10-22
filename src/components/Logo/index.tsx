import React, { useContext } from 'react';
import styled from '@emotion/styled';
import DefaultLogo from 'assets/images/default_logo.png';
import DarkLogo from 'assets/images/dark_logo.png';
import { PageThemeContext } from 'context/pageTheme';

function Logo() {
  const pageTheme = useContext(PageThemeContext);

  return (
    <StyledLogo>
      {pageTheme === 'default' ? (
        <img src={DefaultLogo} alt="logo" />
      ) : (
        <img src={DarkLogo} alt="logo" />
      )}
    </StyledLogo>
  );
}

const StyledLogo = styled.h1`
  height: 32px;
  img {
    height: 100%;
  }
`;

export default Logo;
