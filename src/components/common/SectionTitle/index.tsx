import React from 'react';
import styled from '@emotion/styled';

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title = '' }: SectionTitleProps) {
  return (
    <TitleWrapper>
      <h3>{title}</h3>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  width: 100%;
  margin: 6rem 0 2rem 0;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  h3 {
    font-family: 'BlackHanSans';
    font-size: 4rem;
  }
`;

export default SectionTitle;
