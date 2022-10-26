import React, { useCallback, useContext, useRef } from 'react';
import styled from '@emotion/styled';
import { HeaderStateContext, HeaderStateDispatch } from 'context/header';
import { CSSTransition } from 'react-transition-group';

function NavigationList() {
  const drawerState = useContext(HeaderStateContext);
  const drawerDispatch = useContext(HeaderStateDispatch);

  const onClickMenu = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      drawerDispatch && drawerDispatch({ type: 'toggle' });
      document
        .getElementById(
          `${(e.currentTarget.dataset as { name: string })?.name}`,
        )
        ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    },
    [drawerDispatch],
  );

  const button01 = useRef(null);
  const button02 = useRef(null);
  const button03 = useRef(null);

  return (
    <NaviList>
      <li>
        <CSSTransition
          in={drawerState}
          timeout={300}
          unmountOnExit
          nodeRef={button01}
        >
          <button
            type="button"
            data-name="aboutMe"
            onClick={onClickMenu}
            ref={button01}
          >
            ABOUT ME
          </button>
        </CSSTransition>
      </li>
      <li>
        <CSSTransition
          in={drawerState}
          timeout={300}
          unmountOnExit
          nodeRef={button02}
        >
          <button
            type="button"
            data-name="works"
            onClick={onClickMenu}
            ref={button02}
          >
            WORKS
          </button>
        </CSSTransition>
      </li>
      <li>
        <CSSTransition
          in={drawerState}
          timeout={300}
          unmountOnExit
          nodeRef={button03}
        >
          <button
            type="button"
            data-name="contact"
            onClick={onClickMenu}
            ref={button03}
          >
            CONTACT
          </button>
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
