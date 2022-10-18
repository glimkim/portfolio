import React, { HTMLAttributes } from 'react';
import Header from 'components/Header';
import { PageTheme } from 'styles/theme';
import styled from '@emotion/styled';
import { HeaderHeight, DrawerWidthClosed, pageWidth } from 'styles/global';

interface PageTemplate extends HTMLAttributes<HTMLDivElement> {
  theme?: PageTheme;
  children: React.ReactNode;
}

function PageTemplate({ theme = 'basic', children }: PageTemplate) {
  return (
    <PageContainer pageTheme={theme}>
      <Header />
      <div className="contents">{children}</div>
    </PageContainer>
  );
}

const PageContainer = styled.div<{ pageTheme: PageTheme }>`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ pageTheme, theme: { colors } }) =>
    pageTheme === 'basic' ? colors.keyColor : colors.dark100};
  div.contents {
    width: ${pageWidth};
    max-width: 100%;
    margin: 0 auto;
    padding-top: ${HeaderHeight};
    padding-left: ${DrawerWidthClosed};
  }
`;

export default PageTemplate;
