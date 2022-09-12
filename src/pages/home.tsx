import React, { useState } from 'react';
import styled from '@emotion/styled';
import { pageWidth } from 'styles/global';
import WebFont from 'webfontloader';

function home() {
  const [fontLoaded, setFontLoaded] = useState(false);
  WebFont.load({
    google: {
      families: ['IBM Plex Mono', 'Faster One'],
    },
    custom: {
      families: ['BlackHanSans'],
    },
    fontactive() {
      setFontLoaded(true);
    },
    fontloading() {
      setFontLoaded(false);
    },
  });

  return <PageContainer>{fontLoaded ? 'Done' : 'Loading'}</PageContainer>;
}

const PageContainer = styled.div`
  width: ${pageWidth};
  max-width: 100%;
`;

export default home;
