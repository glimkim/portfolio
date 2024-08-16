import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ProfileImg from 'components/common/ProfileImg';
import SectionTitle from 'components/common/SectionTitle';
import Proficient01 from 'assets/images/skill_icon_proficient_01.png';
import Proficient02 from 'assets/images/skill_icon_proficient_02.png';
import Proficient03 from 'assets/images/skill_icon_proficient_03.png';
import Proficient04 from 'assets/images/skill_icon_proficient_04.png';
import Proficient05 from 'assets/images/skill_icon_proficient_05.png';
import Proficient06 from 'assets/images/skill_icon_proficient_06.png';
import Tried01 from 'assets/images/skill_icon_tried_01.png';
import Tried02 from 'assets/images/skill_icon_tried_02.png';
import Tried03 from 'assets/images/skill_icon_tried_03.png';
import Tried04 from 'assets/images/skill_icon_tried_04.png';
import Tools01 from 'assets/images/skill_icon_tools_01.png';
import Tools02 from 'assets/images/skill_icon_tools_02.png';
import Tools03 from 'assets/images/skill_icon_tools_03.png';
import Tools04 from 'assets/images/skill_icon_tools_04.png';
import Tools05 from 'assets/images/skill_icon_tools_05.png';
import Tools06 from 'assets/images/skill_icon_tools_06.png';

function AboutMe() {
  return (
    <SectionWrapper id="aboutMe">
      <SectionTitle title="About Me" />
      <div className="contents">
        <div className="intro">
          <ProfileImg shape="square" />
          <p>
            <b>Hello World! I&apos;m Lim.</b>
            <br />
            <br />
            As a Frontend Developer, I love bringing ideas to life through engaging user interfaces. With experience in VueJS, ReactJS, and TypeScript, I strive to write clean, reliable code that enhances user experiences.<br />
            <br />
            Currently, at LCP, I focus on improving user experiences through complex data visualisations and modern web technologies. I thrive in collaborative environments, tackling challenging problems and transforming concepts into intuitive, user-friendly applications.
          </p>
        </div>
      </div>
      <div className="strengths">
        <h5>My Strengths</h5>
        <StrengthBox>
          <div>
            <h6>Proficient</h6>
            <ul>
              <li>
                JavaScript
              </li>
              <li>
                TypeScript
              </li>
              <li>
                VueJS
              </li>
              <li>
                ReactJS
              </li>
              <li>
                HTML
              </li>
              <li>
                CSS
              </li>
              <li>
                SCSS
              </li>
            </ul>
          </div>
          <div>
            <h6>Tried</h6>
            <ul>
              <li>
                Python
              </li>
              <li>
                NextJS
              </li>
              <li>
                NodeJS
              </li>
              <li>
                Azure Functions
              </li>
              <li>
                MySQL
              </li>
              <li>
                PHP
              </li>
              <li>
                Firebase
              </li>
            </ul>
          </div>
          <div>
            <h6>Tools</h6>
            <ul>
              <li>
                gitHub
              </li>
              <li>
                Adobe XD
              </li>
              <li>
                Adobe Illustrator
              </li>
              <li>
                Adobe Photoshop
              </li>
              <li>
                Zeplin
              </li>
              <li>
                Figma
              </li>
            </ul>
          </div>
        </StrengthBox>
      </div>
    </SectionWrapper>
  );
}

const StrengthBox = styled.ul`
  ${({ theme: { colors } }) => {
    const border = `1px solid ${colors.border}`;
    return css`
      display: flex;
      width: 100%;
      border-top: ${border};
      border-bottom: ${border};
      margin-top: 0.5rem;
      > div {
        width: 33.3%;
        padding: 1rem 0;
        border-right: ${border};
        &:nth-of-type(2) {
          padding-left: 0.7rem;
        }
        &:last-of-type {
          padding-left: 0.7rem;
          border: none;
        }
      }
    `;
  }};

  li {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.5rem 0;
    font-weight: bold;
    transition: 0.6s;
    transform-origin: left center;
    &:first-of-type {
      padding-top: 1rem;
    }
    &:last-of-type {
      padding-bottom: 0;
    }
    &:hover {
      transform: scale(1.1, 1.1);
    }
    img {
      width: 2rem;
    }
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    > div {
      width: 100%;
      border: none;
    }
  }
`;

const SectionWrapper = styled.div`
  div.intro {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1.5rem 0 2rem;
    p {
      width: calc(100% - 12rem);
      line-height: 150%;
      b {
        font-weight: bold;
      }
    }
  }
  div.strengths {
    h5 {
      font-family: 'Poppins', sans-serif;
      font-weight: 900;
      font-size: 2.15rem;
      color: ${({ theme: { colors } }) => colors.title};
    }
    h6 {
      font-family: 'Poppins', sans-serif;
      font-weight: 900;
      font-size: 1.15rem;
    }
  }

  @media screen and (max-width: 767px) {
    div.intro {
      display: flex;
      flex-direction: column;
      p {
        width: 100%;
      }
    }
  }
`;

export default AboutMe;
