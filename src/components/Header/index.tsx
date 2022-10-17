import styled from '@emotion/styled';
import Logo from 'components/Logo';
import React, { useCallback, useContext, useEffect } from 'react';
import { HeaderHeight, HeaderLeftWidth, pageWidth } from 'styles/global';
import { ReactComponent as Arrow } from 'assets/icons/arrow_icon.svg';
import { HeaderStateContext, HeaderStateDispatch } from 'context/header';

function Header() {
  const dispatch = useContext(HeaderStateDispatch);
  const headerState = useContext(HeaderStateContext);

  const onToggleDrawer = useCallback(() => {
    if (dispatch) dispatch({ type: 'toggle' });
  }, [dispatch]);

  useEffect(() => {
    console.log(headerState);
  }, [headerState]);

  return (
    <StyledHeader>
      <div className="headerTop">
        <Logo />
        <div className="line" />
      </div>
      <div className="headerLeft">
        <button type="button" onClick={onToggleDrawer}>
          <Arrow />
        </button>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
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
    div.line {
      position: fixed;
      top: ${HeaderHeight};
      left: ${HeaderLeftWidth};
      width: calc(1440px + (100vw - 1440px) / 2);
      height: 1px;
      background-color: ${({ theme: { colors } }) => colors.dark100};
    }
  }
  div.headerLeft {
    position: absolute;
    top: ${HeaderHeight};
    left: 0;
    width: ${HeaderLeftWidth};
    height: 100vh;
    border: 1px solid ${({ theme: { colors } }) => colors.dark100};
  }
`;

export default Header;
