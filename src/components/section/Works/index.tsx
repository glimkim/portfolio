import { css } from '@emotion/react';
import styled from '@emotion/styled';
import SectionTitle from 'components/common/SectionTitle';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import WorkList from './WorkList';

function Works() {
  const [isMobileSize, setIsMobileSize] = useState(false);
  const onClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget.dataset as { name: string };
    document
      .querySelector(`li[data-name="${name}"]`)
      ?.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
  };

  useEffect(() => {
    const onResize = _.throttle(() => {
      window.innerWidth <= 767 ? setIsMobileSize(true) : setIsMobileSize(false);
    }, 300);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <SectionWrapper id='works'>
      <SectionTitle title='Works' />
      {!isMobileSize && (
        <ul className='navi'>
          <li>
            <button type='button' onClick={onClickBtn} data-name='nPlan'>
              1. nPlan
            </button>
          </li>
          <li>
            <button type='button' onClick={onClickBtn} data-name='LCP'>
              2. LCP
            </button>
          </li>
          <li>
            <button type='button' onClick={onClickBtn} data-name='Toons'>
              3. Toons
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={onClickBtn}
              data-name='Toons Components'
            >
              4. Toons Components
            </button>
          </li>
          <li>
            <button type='button' onClick={onClickBtn} data-name='StepPay'>
              5. StepPay
            </button>
          </li>
          <li>
            <button type='button' onClick={onClickBtn} data-name='Lmitter'>
              6. Lmitter
            </button>
          </li>
          <li>
            <button type='button' onClick={onClickBtn} data-name='LimChat'>
              7. LimChat
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={onClickBtn}
              data-name='ASTELL & KERN'
            >
              8. ASTELL & KERN
            </button>
          </li>
          <li>
            <button type='button' onClick={onClickBtn} data-name='BookAnd'>
              9. BookAnd
            </button>
          </li>
          <li>
            <button type='button' onClick={onClickBtn} data-name='Baekmidang'>
              10. Baekmidang
            </button>
          </li>
        </ul>
      )}
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        li {
          display: flex;
          align-items: center;
          gap: 0.25rem;
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
