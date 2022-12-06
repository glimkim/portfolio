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
            What I really love about being a <b>frontend developer</b> is that I
            get to build the interface where thoughts and ideas come to life,
            and are shared with the end user. <br />
            <br />
            I&apos;m driven by the pursuit of writing ever-more effective,
            reliable and clean code, so that I can develop better interfaces,
            and provide great user experiences.
          </p>
        </div>
      </div>
      <div className="strengths">
        <h5>My Strengths</h5>
        <StrengthBox>
          <div>
            <h6>familiar with</h6>
            <ul>
              <li>
                <img src={Proficient01} alt="js_icon" />
                JavaScript
              </li>
              <li>
                <img src={Proficient02} alt="ts_icon" />
                TypeScript
              </li>
              <li>
                <img src={Proficient03} alt="react_icon" />
                React JS
              </li>
              <li>
                <img src={Proficient04} alt="html_icon" />
                HTML
              </li>
              <li>
                <img src={Proficient05} alt="css_icon" />
                CSS
              </li>
              <li>
                <img src={Proficient06} alt="scss_icon" />
                SCSS
              </li>
            </ul>
          </div>
          <div>
            <h6>experienced</h6>
            <ul>
              <li>
                <img src={Tried01} alt="php_icon" />
                PHP
              </li>
              <li>
                <img src={Tried02} alt="mysql_icon" />
                MySQL
              </li>
              <li>
                <img src={Tried03} alt="nodejs_icon" />
                NodeJS
              </li>
              <li>
                <img src={Tried04} alt="firebase_icon" />
                Firebase
              </li>
            </ul>
          </div>
          <div>
            <h6>tools</h6>
            <ul>
              <li>
                <img src={Tools01} alt="gitHub_icon" />
                gitHub
              </li>
              <li>
                <img src={Tools02} alt="zeplin_icon" />
                Zeplin
              </li>
              <li>
                <img src={Tools03} alt="figma_icon" />
                Figma
              </li>
              <li>
                <img src={Tools04} alt="xd_icon" />
                Adobe XD
              </li>
              <li>
                <img src={Tools05} alt="illustrator_icon" />
                Adobe Illustrator
              </li>
              <li>
                <img src={Tools06} alt="photoshop_icon" />
                Adobe Photoshop
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
