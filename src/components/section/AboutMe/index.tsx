import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ProfileImg from 'components/common/ProfileImg';
import SectionTitle from 'components/common/SectionTitle';

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
            <br /> For me, web development is to actualize our thoughts and
            ideas in real life. The amazing part of being a frontend developer
            is that I get to build interfaces where the thoughts and ideas can
            be actually shared with users from us. I love to continue to learn
            how to make the shared space better by perpetually improving my
            development skills.
            <br />
            <br /> <b>I just love what I do!</b>
          </p>
        </div>
      </div>
      <div className="strengths">
        <h5>My Strengths</h5>
        <StrengthBox>
          <div>
            <h6>familiar with</h6>
            <ul>
              <li>ss</li>
              <li>ss</li>
              <li>ss</li>
              <li>ss</li>
              <li>ss</li>
            </ul>
          </div>
          <div>
            <h6>experienced</h6>
            <ul>
              <li>ss</li>
              <li>ss</li>
              <li>ss</li>
              <li>ss</li>
              <li>ss</li>
              <li>ss</li>
            </ul>
          </div>
          <div>
            <h6>tools</h6>
            <ul>
              <li>ss</li>
              <li>ss</li>
              <li>ss</li>
              <li>ss</li>
              <li>ss</li>
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
      font-size: 0.9rem;
      b {
        font-weight: bold;
      }
    }
  }
  div.strengths {
    h5 {
      font-family: 'BlackHanSans';
      font-size: 2rem;
    }
    h6 {
      font-family: 'BlackHanSans';
    }
  }
`;

export default AboutMe;
