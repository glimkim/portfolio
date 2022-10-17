import React, { useState } from 'react';
import styled from '@emotion/styled';
import { pageWidth } from 'styles/global';
import WebFont from 'webfontloader';
import Loader from 'components/Loader';
import PageTemplate from 'layout/PageTemplate';

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
  background-color: pink;
`;

export default Home;
