import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import WebFont from 'webfontloader';
import Loader from 'components/common/Loader';
import PageTemplate from 'layout/PageTemplate';
import { headerHeight } from 'styles/global';
import Main from 'components/section/Main';
import AboutMe from 'components/section/AboutMe';
import Works from 'components/section/Works';
import Contact from 'components/section/Contact';
import {
  PageTheme,
  PageThemeContext,
  PageThemeDispatch,
} from 'context/pageTheme';

function Home() {
  const pageTheme = useContext(PageThemeContext);
  const pageThemeDispatch = useContext(PageThemeDispatch);
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

  useEffect(() => {
    const modeFromStorage = localStorage.getItem('mode');

    if (modeFromStorage && modeFromStorage !== pageTheme && pageThemeDispatch) {
      pageThemeDispatch({
        type: 'set',
        newTheme: modeFromStorage as PageTheme,
      });
    }
  }, [pageTheme, pageThemeDispatch, localStorage.getItem('mode')]);

  if (!fontLoaded) return <Loader />;
  return (
    <PageTemplate>
      <PageContainer>
        <Main />
        <div className="sections">
          <AboutMe />
          <Works />
          <Contact />
        </div>
      </PageContainer>
    </PageTemplate>
  );
}

const PageContainer = styled.div`
  border-right: 1px solid ${({ theme: { colors } }) => colors.border};
  min-height: calc(100vh - ${headerHeight});

  & > div.sections {
    padding-left: 4rem;
  }

  @media screen and (max-width: 1440px) {
    border: none;
  }
  @media screen and (max-width: 1080px) {
    & > div.sections {
      padding-left: 3rem;
    }
  }
  @media screen and (max-width: 767px) {
    & > div.sections {
      padding: 0;
    }
  }
`;

export default Home;
