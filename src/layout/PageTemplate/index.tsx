import React, { HTMLAttributes } from 'react';
import Header from 'components/common/Header';
import styled from '@emotion/styled';
import { headerHeight, drawerWidthClosed, pageWidth } from 'styles/global';
import Logo from 'components/common/Logo';

interface PageTemplate extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function PageTemplate({ children }: PageTemplate) {
  return (
    <PageContainer>
      <Header />
      <div className="contents">{children}</div>
      <footer>
        <p className="footerTop">Thanks for visiting my portfolio!</p>
        <div className="footerBottom">
          <Logo />
          <p>
            © 2021 LIMKIM all rights reserved
            <br /> This website has been created for the use of a personal
            portfolio.
            <br /> It doesn&apos;t contain any kind of commercial intentions.
          </p>
        </div>
      </footer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.keyColor};

  & > div.contents {
    width: ${pageWidth};
    max-width: 100%;
    margin: 0 auto;
    padding-top: ${headerHeight};
  }

  footer {
    width: ${pageWidth};
    max-width: 100%;
    margin: 0 auto;
    background-color: ${({ theme: { colors } }) => colors.footer};
    padding-left: ${drawerWidthClosed};
    text-align: center;
    border-top: 1px solid ${({ theme: { colors } }) => colors.border};
    p.footerTop {
      padding: 1rem 0;
      border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
      font-size: 0.875rem;
      font-weight: bold;
    }
    div.footerBottom {
      padding: 2rem 0;
      p {
        font-size: 0.875rem;
        margin-top: 2rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    & > div.contents {
      padding-left: ${drawerWidthClosed};
    }
  }

  @media screen and (max-width: 767px) {
    & > div.contents {
      padding: 0 1rem;
    }
  }
`;

export default PageTemplate;
