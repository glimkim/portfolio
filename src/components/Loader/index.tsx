import { css } from '@emotion/react';
import styled from '@emotion/styled';

function Loader() {
  return (
    <LoadingContainer>
      <ul>
        <li className="letter">L</li>
        <li className="letter">I</li>
        <li className="letter">M</li>
        <li className="letter">K</li>
        <li className="letter">I</li>
        <li className="letter">M</li>
      </ul>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme: { colors } }) => `${colors.keyColor}`};
  ul {
    display: flex;
    width: fit-content;
    li.letter {
      display: block;
      font-size: 4rem;
      animation-name: Letter;
      animation-duration: 2.8s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;

      ${() => {
        let styles = '';
        for (let i = 1; i <= 6; i += 1) {
          styles += `&:nth-of-type(${i}){
                animation-delay: ${i * 100}ms;
            }
            `;
        }
        return css`
          ${styles}
        `;
      }};
    }
  }

  @keyframes Letter {
    0% {
      transform: scale(0, 0);
    }
    50% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(0, 0);
    }
  }
`;

export default Loader;
