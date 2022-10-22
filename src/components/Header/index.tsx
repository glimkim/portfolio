import React, { useCallback, useContext } from 'react';
import styled from '@emotion/styled';
import Logo from 'components/Logo';
import {
  headerHeight,
  drawerWidthClosed,
  pageWidth,
  drawerWidthOpen,
} from 'styles/global';
import { HeaderStateContext, HeaderStateDispatch } from 'context/header';
import { PageTheme, PageThemeContext } from 'context/pageTheme';
import SVG from 'components/SVG';
import ThemeSwitch from './ThemeSwitch';
import IconLinkBox from './IconLinkBox';

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
          <SVG icon="Arrow" />
        </button>
        <IconLinkBox drawerState={headerState} />
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
    z-index: 1000;
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
      left: ${({ drawerState }) =>
        drawerState ? drawerWidthOpen : drawerWidthClosed};
      width: ${({ drawerState }) =>
        drawerState
          ? `calc(${pageWidth} - ${drawerWidthOpen} + (100vw - ${pageWidth}) / 2)`
          : `calc(${pageWidth} - ${drawerWidthClosed} + (100vw - ${pageWidth}) / 2)`};
      height: 1px;
      background-color: ${({ theme: { colors } }) => colors.border};
      transition: ${({ drawerState }) => (drawerState ? '0.8s' : '0.3s')};
    }
  }
  div.headerLeft {
    position: absolute;
    top: ${headerHeight};
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: ${({ drawerState }) =>
      drawerState ? drawerWidthOpen : drawerWidthClosed};
    transition: width 0.4s;
    transition-timing-function: ease-in-out;
    height: calc(100vh - ${headerHeight});
    border: 1px solid ${({ theme: { colors } }) => colors.border};
    border-bottom: none;
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
    ul {
      justify-self: flex-end;
    }
  }
`;

export default Header;
