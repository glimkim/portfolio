import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ProfileImg from 'components/common/ProfileImg';
import SectionTitle from 'components/common/SectionTitle';

function AboutMe() {
  return (
    <SectionWrapper id='aboutMe'>
      <SectionTitle title='About Me' />
      <div className='contents'>
        <div className='intro'>
          <ProfileImg shape='square' />
          <p>
            <b>Hello, I&apos;m Lim</b> - A frontend engineer who enjoys turning
            complex product logic into intuitive user experiences.
            <br />
            <br />
            I work with React and TypeScript to build scalable, maintainable
            frontend systems, particularly in data-heavy environments. I&apos;m
            comfortable navigating ambiguity, breaking down messy requirements,
            aligning with backend constraints, and shaping clear UI
            architecture. <br /> <br />
            I care about clean contracts, long-term maintainability, and
            building things properly rather than quickly patching them. Good
            frontend engineering, to me, is about clarity — in code, in
            communication, and in product thinking.
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className='strengths'>
        <h5>Core Strengths</h5>
        <StrengthBox>
          <div>
            <h6>Data-Driven Frontend</h6>
            <ul>
              <li>
                Building complex, data-heavy interfaces with React & TypeScript
              </li>
              <li>Type-safe API integration (GraphQL / REST)</li>
              <li>Scalable component architecture</li>
            </ul>
          </div>
          <div>
            <h6>Product-Minded Engineering</h6>
            <ul>
              <li>Turning ambiguous requirements into structured UI systems</li>
              <li>Aligning frontend logic with backend constraints</li>
              <li>Designing for long-term maintainability</li>
            </ul>
          </div>
          <div>
            <h6>Design-Aware Development</h6>
            <ul>
              <li>Strong visual hierarchy & layout systems</li>
              <li>Design system implementation</li>
              <li>UX decisions grounded in clarity and usability</li>
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
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    line-height: 150%;
    transition: 0.6s;
    transform-origin: left center;
    &::after {
      position: absolute;
      left: 0;
      top: 0.4rem;
      content: '»';
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
