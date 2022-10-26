import { css } from '@emotion/react';
import styled from '@emotion/styled';
import SectionTitle from 'components/common/SectionTitle';
import React from 'react';
import WorkList from './WorkList';

function Works() {
  return (
    <SectionWrapper id="works">
      <SectionTitle title="Works" />
      <ul className="navi">
        <li>
          <a href="#id">Toons</a>
        </li>
        <li>
          <a href="#id">Steppay</a>
        </li>
        <li>
          <a href="#id">Lmitter</a>
        </li>
        <li>
          <a href="#id">LimChat</a>
        </li>
        <li>
          <a href="#id">BookAnd</a>
        </li>
        <li>
          <a href="#id">AstellnKern</a>
        </li>
        <li>
          <a href="#id">Baekmidang</a>
        </li>
      </ul>
      <WorkList />
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  ${({ theme: { colors } }) => {
    const border = `1px solid ${colors.border}`;
    return css`
      > ul.navi {
        border-bottom: ${border};
        padding: 1rem 0;
        margin-bottom: 2.5rem;
        li {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          &::before {
            content: '•';
          }
          a {
            display: block;
            padding: 0.25rem 0;
            transform: scale(1, 1);
            transition: 0.3s;
            transform-origin: left center;
            &:hover {
              transform: scale(1.1, 1.1);
            }
          }
        }
      }
    `;
  }}
`;

export default Works;
