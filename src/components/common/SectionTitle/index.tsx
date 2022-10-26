import React from 'react';
import styled from '@emotion/styled';

type Align = 'center' | 'left';
interface SectionTitleProps {
  title: string;
  align?: 'center' | 'left';
}

function SectionTitle({ title = '', align = 'left' }: SectionTitleProps) {
  return (
    <TitleWrapper align={align}>
      <h3>{title}</h3>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div<{ align: Align }>`
  width: 100%;
  margin-top: 4rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  h3 {
    font-family: 'BlackHanSans';
    font-size: 4rem;
    text-align: ${({ align }) => align};
  }
`;

export default SectionTitle;
