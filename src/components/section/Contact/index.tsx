import React from 'react';
import styled from '@emotion/styled';
import ProfileImg from 'components/common/ProfileImg';
import SectionTitle from 'components/common/SectionTitle';

function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Contact" align="center" />
      <div>
        <ProfileImg shape="circle" />
        <ul>
          <li>
            Email <span className="bar" />{' '}
            <a href="mailto:webmaster@example.com">ltbllim@gmail.com</a>
          </li>
          <li>
            Mobile <span className="bar" />{' '}
            <a href="tel:447784990516">+44 7784 990516</a>
          </li>
          <li>
            Location <span className="bar" /> <p>London, UK</p>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 8rem;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    figure {
      margin: 4rem 0;
    }
    ul {
      display: flex;
      gap: 2.5rem;
      align-items: center;
      justify-content: center;
      li {
        display: flex;
        align-items: center;
        height: 2rem;
        line-height: 2rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 900;
        font-size: 1.15rem;
        span.bar {
          display: flex;
          width: 4px;
          height: 1rem;
          margin: 0 0.5rem;
          background-color: ${({ theme: { colors } }) => `${colors.font}70`};
        }
      }
    }
  }
`;

export default Contact;
