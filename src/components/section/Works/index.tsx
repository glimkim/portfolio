import { css } from '@emotion/react';
import styled from '@emotion/styled';
import SectionTitle from 'components/common/SectionTitle';
import React from 'react';
import WorkList from './WorkList';

function Works() {
  const onClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget.dataset as { name: string };
    document
      .querySelector(`li[data-name="${name}"]`)
      ?.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
  };

  return (
    <SectionWrapper id="works">
      <SectionTitle title="Works" />
      <ul className="navi">
        <li>
          <button type="button" onClick={onClickBtn} data-name="Toons">
            Toons
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={onClickBtn}
            data-name="Toons Components"
          >
            Toons Components
          </button>
        </li>
        <li>
          <button type="button" onClick={onClickBtn} data-name="StepPay">
            StepPay
          </button>
        </li>
        <li>
          <button type="button" onClick={onClickBtn} data-name="Lmitter">
            Lmitter
          </button>
        </li>
        <li>
          <button type="button" onClick={onClickBtn} data-name="LimChat">
            LimChat
          </button>
        </li>
        <li>
          <button type="button" onClick={onClickBtn} data-name="ASTELL & KERN">
            ASTELL & KERN
          </button>
        </li>
        <li>
          <button type="button" onClick={onClickBtn} data-name="BookAnd">
            BookAnd
          </button>
        </li>
        <li>
          <button type="button" onClick={onClickBtn} data-name="Baekmidang">
            Baekmidang
          </button>
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
          button {
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
