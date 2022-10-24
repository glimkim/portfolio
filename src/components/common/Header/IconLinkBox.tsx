import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import SVG from 'components/common/SVG';
import { CSSTransition } from 'react-transition-group';

interface IconLinkBoxProps extends HTMLAttributes<HTMLUListElement> {
  drawerState: boolean;
}

function IconLinkBox({ drawerState, ...props }: IconLinkBoxProps) {
  const iconList = [
    {
      name: 'GitHub',
      link: 'https://github.com/glimkim',
      icon: <SVG icon="GitHub" />,
    },
    {
      name: 'LinkedIn',
      link: 'https://github.com/glimkim',
      icon: <SVG icon="LinkedIn" />,
    },
    {
      name: 'Notion',
      link: 'https://github.com/glimkim',
      icon: <SVG icon="Notion" />,
    },
  ];
  return (
    <IconList drawerState={drawerState} {...props}>
      {iconList.map((_icon) => (
        <li key={_icon.name}>
          <a href={_icon.link}>
            {_icon.icon}{' '}
            <CSSTransition in={drawerState} timeout={300} unmountOnExit>
              <span>{_icon.name}</span>
            </CSSTransition>
          </a>
        </li>
      ))}
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
