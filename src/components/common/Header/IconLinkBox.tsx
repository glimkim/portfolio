import React, { HTMLAttributes, useRef } from 'react';
import styled from '@emotion/styled';
import SVG from 'components/common/SVG';
import { CSSTransition } from 'react-transition-group';

interface IconLinkBoxProps extends HTMLAttributes<HTMLUListElement> {
  drawerState: boolean;
}

function IconLinkBox({ drawerState, ...props }: IconLinkBoxProps) {
  const span01 = useRef(null);
  const span02 = useRef(null);
  const span03 = useRef(null);

  return (
    <IconList drawerState={drawerState} {...props}>
      <li>
        <a href="https://github.com/glimkim" target="_blank" rel="noreferrer">
          <SVG icon="GitHub" />{' '}
          <CSSTransition
            in={drawerState}
            timeout={300}
            unmountOnExit
            nodeRef={span01}
          >
            <span ref={span01}>GitHub</span>
          </CSSTransition>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/lim-kim-dev"
          target="_blank"
          rel="noreferrer"
        >
          <SVG icon="LinkedIn" />{' '}
          <CSSTransition
            in={drawerState}
            timeout={300}
            unmountOnExit
            nodeRef={span02}
          >
            <span ref={span02}>LinkedIn</span>
          </CSSTransition>
        </a>
      </li>
      <li>
        <a
          href="https://limdev.notion.site/Dev-bc42e136f9b241a19fbc4210cf0a2073"
          target="_blank"
          rel="noreferrer"
        >
          <SVG icon="Notion" />{' '}
          <CSSTransition
            in={drawerState}
            timeout={300}
            unmountOnExit
            nodeRef={span03}
          >
            <span ref={span03}>Notion</span>
          </CSSTransition>
        </a>
      </li>
    </IconList>
  );
}

const IconList = styled.ul<{ drawerState: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
  border-top: 1px solid ${({ theme: { colors } }) => colors.border};
  padding: 1rem 0;

  li {
    width: 100%;
    a {
      display: flex;
      justify-content: ${({ drawerState }) =>
        drawerState ? 'flex-start' : 'center'};
      align-items: center;
      width: 100%;
      height: 3rem;
      gap: 0.7rem;
      padding-left: ${({ drawerState }) => (drawerState ? '2.5rem' : 0)};
      transform: scale(1, 1);
      transition: 0.6s;
      transform-origin: ${({ drawerState }) =>
        drawerState ? ' left center' : 'center'};
      span {
        opacity: 0;
        transition: 0.6s;
      }
      span.enter-done {
        opacity: 1;
      }
      span.exit-done {
      }
      &:hover {
        transition: 0.3s;
        transform: scale(1.1, 1.1);
      }
    }
  }
`;

export default IconLinkBox;
