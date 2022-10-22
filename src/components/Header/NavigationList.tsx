import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { HeaderStateContext } from 'context/header';
import { CSSTransition } from 'react-transition-group';

function NavigationList() {
  const drawerState = useContext(HeaderStateContext);

  return (
    <NaviList>
      <li>
        <CSSTransition in={drawerState} timeout={300} unmountOnExit>
          <a href="#aboutMe">ABOUT ME</a>
        </CSSTransition>
      </li>
      <li>
        <CSSTransition in={drawerState} timeout={300} unmountOnExit>
          <a href="#aboutMe">WORKS</a>
        </CSSTransition>
      </li>
      <li>
        <CSSTransition in={drawerState} timeout={300} unmountOnExit>
          <a href="#aboutMe">CONTACT</a>
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
      font-weight: bold;
      opacity: 0;
      &.enter-done {
        opacity: 1;
        transition: 0.6s;
      }
      &.exit-done {
      }
    }
  }
`;

export default NavigationList;
