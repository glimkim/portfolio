import React, { HTMLAttributes } from 'react';
import Header from 'components/Header';
import styled from '@emotion/styled';
import { headerHeight, drawerWidthClosed, pageWidth } from 'styles/global';

interface PageTemplate extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function PageTemplate({ children }: PageTemplate) {
  return (
    <PageContainer>
      <Header />
      <div className="contents">{children}</div>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.keyColor};
  div.contents {
    width: ${pageWidth};
    max-width: 100%;
    margin: 0 auto;
    padding-top: ${headerHeight};
    padding-left: ${drawerWidthClosed};
  }
`;

export default PageTemplate;
