import React, { useCallback, useContext, useRef } from 'react';
import styled from '@emotion/styled';
import { HeaderStateContext, HeaderStateDispatch } from 'context/header';
import { CSSTransition } from 'react-transition-group';

function NavigationList() {
  const drawerState = useContext(HeaderStateContext);
  const drawerDispatch = useContext(HeaderStateDispatch);

  const onClickMenu = useCallback(() => {
    drawerDispatch && drawerDispatch({ type: 'toggle' });
  }, [drawerDispatch]);

  const anchor01 = useRef(null);
  const anchor02 = useRef(null);
  const anchor03 = useRef(null);

  return (
    <NaviList>
      <li>
        <CSSTransition
          in={drawerState}
          timeout={300}
          unmountOnExit
          nodeRef={anchor01}
        >
          <a href="#aboutMe" onClick={onClickMenu} ref={anchor01}>
            ABOUT ME
          </a>
        </CSSTransition>
      </li>
      <li>
        <CSSTransition
          in={drawerState}
          timeout={300}
          unmountOnExit
          nodeRef={anchor02}
        >
          <a href="#works" onClick={onClickMenu} ref={anchor02}>
            WORKS
          </a>
        </CSSTransition>
      </li>
      <li>
        <CSSTransition
          in={drawerState}
          timeout={300}
          unmountOnExit
          nodeRef={anchor03}
        >
          <a href="#contact" onClick={onClickMenu} ref={anchor03}>
            CONTACT
          </a>
        </CSSTransition>
      </li>
    </NaviList>
  );
}

const NaviList = styled.ul`
  padding-bottom: 4rem;
  li {
    width: 100%;
    height: 3rem;
    a {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-weight: bold;
      opacity: 0;
      transform: scale(1, 1);
      &::after {
        position: absolute;
        bottom: 5px;
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background-color: #333;
        transition: 0.3s;
      }
      &.enter-done {
        opacity: 1;
        transition: 0.6s;
      }
      &.exit-done {
      }
      &:hover {
        transition: 0.3s;
        transform: scale(1.1, 1.1);
        &::after {
          width: 100%;
          bottom: 10px;
        }
      }
    }
  }
`;

export default NavigationList;
