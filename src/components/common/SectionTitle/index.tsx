import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import useScrollTop from 'hooks/useScrollTop';
import { appearFromBottom, appearFromLeft, upNdown } from 'styles/animation';
import { css } from '@emotion/react';

type Align = 'center' | 'left';
interface SectionTitleProps {
  title: string;
  align?: 'center' | 'left';
}

function SectionTitle({ title = '', align = 'left' }: SectionTitleProps) {
  const [isActive, setIsActive] = useState(false);
  const { scrollTop } = useScrollTop();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(isActive, title);
  }, [isActive]);

  useEffect(() => {
    const elementPosition = ref.current?.offsetTop || 0;

    if (scrollTop >= elementPosition - 400) {
      setIsActive(true);
    } else if (scrollTop <= elementPosition - 400) {
      setIsActive(false);
    }
  }, [scrollTop, ref]);

  return (
    <TitleWrapper
      className={isActive ? 'active sectionTitle' : 'sectionTitle'}
      letterLength={title.split('').length}
      align={align}
      ref={ref}
    >
      <h3>
        {title.split('').map((_str) => (
          <span>{_str === ' ' ? <span>&nbsp;</span> : _str}</span>
        ))}
      </h3>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div<{ letterLength: number; align: Align }>`
  width: 100%;
  padding-top: 4rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  overflow: visible;
  h3 {
    display: flex;
    span {
      display: block;
      font-family: 'BlackHanSans';
      font-size: 4rem;
    }
    text-align: ${({ align }) => align};
  }

  &.active {
    h3 span {
      ${upNdown(600, 0)}
    }
    ${({ letterLength }) => {
      let styles = ``;
      for (let i = 1; i <= letterLength; i++) {
        styles += `
        h3 span:nth-of-type(${i}){
    animation-delay: ${i * 0.05}s;
  }`;
      }
      return css`
        ${styles}
      `;
    }}
  }
`;

export default SectionTitle;
