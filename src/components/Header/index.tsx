import styled from '@emotion/styled';
import Logo from 'components/Logo';
import React, { useCallback, useContext } from 'react';
import {
  headerHeight,
  drawerWidthClosed,
  pageWidth,
  drawerWidthOpen,
} from 'styles/global';
import { ReactComponent as Arrow } from 'assets/icons/arrow_icon.svg';
import { HeaderStateContext, HeaderStateDispatch } from 'context/header';
import { PageTheme, PageThemeContext } from 'context/pageTheme';
import ThemeSwitch from './ThemeSwitch';

function Header() {
  const dispatch = useContext(HeaderStateDispatch);
  const headerState = useContext(HeaderStateContext);
  const pageTheme = useContext(PageThemeContext);

  const onToggleDrawer = useCallback(() => {
    if (dispatch) dispatch({ type: 'toggle' });
  }, [dispatch]);

  return (
    <StyledHeader drawerState={headerState} pageTheme={pageTheme}>
      <div className="headerTop">
        <div>
          <Logo />
          <ThemeSwitch className="switch" />
        </div>
        <div className="line" />
      </div>
      <div className="headerLeft">
        <button
          className={headerState ? 'toggleBtn active' : 'toggleBtn'}
          type="button"
          onClick={onToggleDrawer}
        >
          <Arrow />
        </button>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header<{
  drawerState: boolean;
  pageTheme: PageTheme;
}>`
  position: fixed;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  z-index: 1000;
  transform: translateX(-50%);
  width: ${pageWidth};
  max-width: 100%;
  height: 100vh;

  div.headerTop {
    position: relative;
    width: 100%;
    max-width: 100%;
    height: ${headerHeight};
    border-left: 1px solid ${({ theme: { colors } }) => colors.border};
    background-color: ${({ theme: { colors } }) => colors.keyColor};
    div {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      button.switch {
        position: absolute;
        right: 0;
      }
    }
    div.line {
      position: fixed;
      top: ${headerHeight};
      left: ${drawerWidthClosed};
      width: calc(1440px + (100vw - 1440px) / 2);
      height: 1px;
      background-color: ${({ theme: { colors } }) => colors.border};
    }
  }
  div.headerLeft {
    position: absolute;
    top: ${headerHeight};
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${({ drawerState }) =>
      drawerState ? drawerWidthOpen : drawerWidthClosed};
    transition: width 0.4s;
    transition-timing-function: ease-in-out;
    height: 100vh;
    border: 1px solid ${({ theme: { colors } }) => colors.border};
    background-color: ${({ theme: { colors } }) => colors.keyColor};
    button.toggleBtn {
      align-self: flex-end;
      width: ${drawerWidthClosed};
      height: ${drawerWidthClosed};
      transition: 0.6s;
      transition-timing-function: ease-in-out;
      &.active {
        transform: rotateY(180deg);
      }
    }
  }
`;

export default Header;
