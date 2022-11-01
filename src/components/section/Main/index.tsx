import styled from '@emotion/styled';
import Button from 'components/common/Button';
import React, { useCallback } from 'react';
import { appearFromBottom, appearFromLeft, fadeIn } from 'styles/animation';
import { headerHeight } from 'styles/global';

function Main() {
  const onClickScrollDown = useCallback(() => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }, [window.innerHeight]);

  const onClickDownloadCV = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/assets/Lim_Kim_CV.pdf';
    link.setAttribute('download', `Lim_Kim_CV.pdf`);
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  }, []);

  const onClickContactMe = useCallback(() => {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];

    if (toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem))) {
      window.location.href = 'tel:447784990516';
    } else {
      window.location.href = 'mailto:mail@example.org';
    }
  }, []);

  return (
    <MainContainer>
      <div className="textBox">
        <h2>Hello, I am Lim.</h2>
        <h3>Frontend Developer</h3>
      </div>
      <ul className="buttonList">
        <li>
          <Button onClick={onClickScrollDown}>Find out about me more ↓</Button>
        </li>
        <li>
          <h4>or you can just</h4>
          <Button onClick={onClickDownloadCV}>Download my CV ✓</Button>
        </li>
        <li>
          <h4>or just</h4>
          <Button onClick={onClickContactMe}>Contact me !</Button>
        </li>
      </ul>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - ${headerHeight});
  width: 100%;
  padding: 0 4rem;

  div.textBox {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: fit-content;
    margin-bottom: 3rem;
    h2 {
      font-family: 'BlackHanSans';
      font-size: 4rem;
      text-shadow: 4px 2px 6px ${({ theme: { colors } }) => colors.shadow};
      color: ${({ theme: { colors } }) => colors.title};
      ${appearFromBottom(600, 600)}
    }
    h3 {
      font-family: 'Faster One';
      font-size: 2rem;
      color: ${({ theme: { colors } }) => colors.title};
      ${appearFromLeft(600, 800)}
    }
  }

  ul.buttonList {
    display: flex;
    flex-direction: column;
    width: 100%;

    li {
      margin-bottom: 2rem;
      &:nth-of-type(1) {
        align-self: flex-start;
        ${fadeIn(600, 1000)}
      }
      &:nth-of-type(2) {
        align-self: center;
        ${fadeIn(600, 1200)}
      }
      &:nth-of-type(3) {
        align-self: flex-end;
        margin-bottom: 0;
        ${fadeIn(600, 1400)}
      }
      h4 {
        font-family: 'BlackHanSans';
        margin-bottom: 2rem;
      }
      button {
        width: 33.5rem;
        max-width: 100%;
      }
    }
  }

  @media screen and (max-width: 1080px) {
    align-items: center;
    padding: 0;
    ul.buttonList {
      width: 100%;
      li {
        width: 100%;
        text-align: center;
        &:nth-of-type(1) {
          align-self: center;
        }
        &:nth-of-type(3) {
          align-self: center;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    div.textBox {
      h2 {
        font-size: 4rem;
      }
      h3 {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 680px) {
    div.textBox {
      h2 {
        font-size: 3rem;
      }
    }
  }
`;

export default Main;
