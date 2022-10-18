import styled from '@emotion/styled';
import Logo from 'components/Logo';
import React, { useCallback, useContext } from 'react';
import {
  HeaderHeight,
  DrawerWidthClosed,
  pageWidth,
  DrawerWidthOpen,
} from 'styles/global';
import { ReactComponent as Arrow } from 'assets/icons/arrow_icon.svg';
import { HeaderStateContext, HeaderStateDispatch } from 'context/header';

function Header() {
  const dispatch = useContext(HeaderStateDispatch);
  const headerState = useContext(HeaderStateContext);

  const onToggleDrawer = useCallback(() => {
    if (dispatch) dispatch({ type: 'toggle' });
  }, [dispatch]);

  return (
    <StyledHeader drawerState={headerState}>
      <div className="headerTop">
        <Logo />
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

const StyledHeader = styled.header<{ drawerState: boolean }>`
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
    height: ${HeaderHeight};
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid ${({ theme: { colors } }) => colors.dark100};
    background-color: ${({ theme: { colors } }) => colors.keyColor};
    div.line {
      position: fixed;
      top: ${HeaderHeight};
      left: ${DrawerWidthClosed};
      width: calc(1440px + (100vw - 1440px) / 2);
      height: 1px;
      background-color: ${({ theme: { colors } }) => colors.dark100};
    }
  }
  div.headerLeft {
    position: absolute;
    top: ${HeaderHeight};
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${({ drawerState }) =>
      drawerState ? DrawerWidthOpen : DrawerWidthClosed};
    transition: 0.4s;
    transition-timing-function: ease-in-out;
    height: 100vh;
    border: 1px solid ${({ theme: { colors } }) => colors.dark100};
    background-color: ${({ theme: { colors } }) => colors.keyColor};
    button.toggleBtn {
      align-self: flex-end;
      width: ${DrawerWidthClosed};
      height: ${DrawerWidthClosed};
      transition: 0.6s;
      transition-timing-function: ease-in-out;
      &.active {
        transform: rotateY(180deg);
      }
    }
  }
`;

export default Header;
