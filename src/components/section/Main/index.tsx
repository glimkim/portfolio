import styled from '@emotion/styled';
import Button from 'components/common/Button';
import React from 'react';
import { headerHeight } from 'styles/global';

function Main() {
  return (
    <MainContainer>
      <div className="textBox">
        <h2>Hello, I am Lim.</h2>
        <h3>Frontend Developer</h3>
      </div>
      <ul className="buttonList">
        <li>
          <Button>Find out about me more ↓</Button>
        </li>
        <li>
          <h4>or you can just</h4>
          <Button>Download my CV ✓</Button>
        </li>
        <li>
          <h4>or just</h4>
          <Button>Contact me !</Button>
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
    }
    h3 {
      font-family: 'Faster One';
      font-size: 2rem;
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
      }
      &:nth-of-type(2) {
        align-self: center;
      }
      &:nth-of-type(3) {
        align-self: flex-end;
        margin-bottom: 0;
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
