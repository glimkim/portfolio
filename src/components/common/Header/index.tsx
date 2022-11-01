import React, { useCallback, useContext } from 'react';
import styled from '@emotion/styled';
import Logo from 'components/common/Logo';
import {
  headerHeight,
  drawerWidthClosed,
  pageWidth,
  drawerWidthOpen,
} from 'styles/global';
import { HeaderStateContext, HeaderStateDispatch } from 'context/header';
import {
  PageTheme,
  PageThemeContext,
  PageThemeDispatch,
} from 'context/pageTheme';
import IconBtn from 'components/common/IconButton';
import { appearFromLeft, fadeIn, scaleX0to1 } from 'styles/animation';
import IconLinkBox from './IconLinkBox';
import NavigationList from './NavigationList';

function Header() {
  const headerStateDispatch = useContext(HeaderStateDispatch);
  const headerState = useContext(HeaderStateContext);
  const pageTheme = useContext(PageThemeContext);
  const pageThemeDispatch = useContext(PageThemeDispatch);

  const onToggleMode = useCallback(() => {
    pageThemeDispatch && pageThemeDispatch({ type: 'toggle' });
    localStorage.setItem('mode', pageTheme === 'default' ? 'dark' : 'default');
  }, [headerStateDispatch, pageTheme]);

  const onToggleDrawer = useCallback(() => {
    if (headerStateDispatch) headerStateDispatch({ type: 'toggle' });
  }, [headerStateDispatch]);

  const onClickLogo = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <StyledHeader drawerState={headerState} pageTheme={pageTheme}>
      <div className="headerTop">
        <div>
          <button type="button" className="logo" onClick={onClickLogo}>
            <Logo />
          </button>
          <IconBtn icon="Mode" onClick={onToggleMode} className="switch" />
        </div>
        <div className="line" />
      </div>
      <div className="headerLeft">
        <IconBtn
          className={headerState ? 'toggleBtn active' : 'toggleBtn'}
          onClick={onToggleDrawer}
          icon="Arrow"
        />
        <NavigationList />
        <IconLinkBox drawerState={headerState} />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header<{
  drawerState: boolean;
  pageTheme: PageTheme;
}>`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: ${pageWidth};
  max-width: 100%;
  margin: 0 auto;
  div.headerTop {
    position: fixed;
    top: 0;
    z-index: 1000;
    height: ${headerHeight};
    border-left: 1px solid ${({ theme: { colors } }) => colors.border};
    background-color: ${({ theme: { colors } }) => colors.keyColor};
    transition: background-color 0.3s;
    > div {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      button.logo {
        ${appearFromLeft(600, 200)}
      }
      button.switch {
        position: absolute;
        right: 0;
        height: 2rem;
        border-radius: 100%;
        padding-left: 1.43rem;
        figure {
          height: 100%;
          ${fadeIn(400)}
          svg {
            height: 100%;
          }
        }
      }
    }
    div.line {
      position: fixed;
      top: ${headerHeight};
      left: ${({ drawerState }) =>
        drawerState ? drawerWidthOpen : drawerWidthClosed};
      width: ${({ drawerState }) =>
        drawerState
          ? `calc(${pageWidth} - ${drawerWidthOpen} + ((100vw - ${pageWidth}) / 2))`
          : `calc(${pageWidth} - ${drawerWidthClosed} + ((100vw - ${pageWidth}) / 2))`};
      height: 1px;
      background-color: ${({ theme: { colors } }) => colors.border};
      transition: ${({ drawerState }) => (drawerState ? '0.8s' : '0.3s')};
      ${scaleX0to1};
    }
  }
  div.headerLeft {
    position: absolute;
    top: ${headerHeight};
    left: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: ${({ drawerState }) =>
      drawerState ? drawerWidthOpen : drawerWidthClosed};
    height: calc(100vh - ${headerHeight});
    border: 1px solid ${({ theme: { colors } }) => colors.border};
    border-bottom: none;
    background-color: ${({ theme: { colors } }) => colors.keyColor};
    transition: width 0.4s;
    transition-timing-function: ease-in-out;
    ${appearFromLeft(600)}
    button.toggleBtn {
      align-self: flex-end;
      width: ${drawerWidthClosed};
      height: ${drawerWidthClosed};
      transition: 0.6s;
      transition-timing-function: ease-in-out;
      &:hover {
        transition: 0.3s;
      }
      &.active {
        transform: rotateY(180deg);
      }
    }
    ul {
      justify-self: flex-end;
    }
  }
  @media screen and (max-width: 1440px) {
    div.headerTop {
      padding: 0 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    div.headerTop {
      left: 50%;
      right: 0;
      transform: translateX(-50%);
      width: ${pageWidth};
      max-width: 100%;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    div.headerTop {
      left: 0;
      width: 100%;
      padding: 0 1rem;
      box-sizing: border-box;
      border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
      div.line {
        display: none;
      }
    }

    div.headerLeft {
      display: none;
    }
  }
`;

export default Header;
