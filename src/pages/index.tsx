import React, { useState } from 'react';
import styled from '@emotion/styled';
import WebFont from 'webfontloader';
import Loader from 'components/Loader';
import PageTemplate from 'layout/PageTemplate';
import { headerHeight } from 'styles/global';

function Home() {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);
  WebFont.load({
    google: {
      families: ['IBM Plex Mono', 'Faster One'],
    },
    custom: {
      families: ['BlackHanSans'],
    },
    active: () => {
      setTimeout(() => {
        setFontLoaded(true);
      }, 1000);
    },
  });

  if (!fontLoaded) return <Loader />;
  return (
    <PageTemplate>
      <PageContainer>contents</PageContainer>
    </PageTemplate>
  );
}

const PageContainer = styled.div`
  padding-left: 2rem;
  border-right: 1px solid ${({ theme: { colors } }) => colors.border};
  min-height: calc(100vh - ${headerHeight});
  *,
  * > * {
    color: ${({ theme: { colors } }) => colors.font} !important;
  }
`;

export default Home;
