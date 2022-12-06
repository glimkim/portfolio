import styled from '@emotion/styled';
import Button from 'components/common/Button';
import SVG from 'components/common/SVG';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { ItemInfo } from './WorkList';

interface ItemProps {
  index: number;
  itemInfo: ItemInfo;
}

function WorkItem({
  index,
  itemInfo: {
    title,
    date,
    link,
    gitLink,
    stacks,
    description,
    img,
    gitCodeDisabled,
  },
}: ItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const [itemTop, setItemTop] = useState(0);

  const onClickBtn = useCallback((_link: string) => {
    window.open(_link);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const onScroll: () => void = _.throttle(() => {
      timer = setTimeout(() => {
        setItemTop(ref.current?.getBoundingClientRect().top || 0);
      }, 300);
    }, 300);

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <Item
      data-name={title}
      ref={ref}
      className={itemTop - 400 <= 0 ? 'imageActive' : ''}
    >
      <div className="details">
        <div className="boxTop">
          <Number className={itemTop - 400 <= 0 ? 'active' : ''}>
            {index + 1}
          </Number>
          <div className="title">
            <h6>{title}</h6>
            <p>{date}</p>
          </div>
        </div>
        <div className="buttons">
          <Button theme="sub" onClick={() => onClickBtn(link)}>
            Visit {title}
          </Button>
          {!gitCodeDisabled && (
            <Button
              theme="sub"
              className="gitBtn"
              onClick={() => onClickBtn(gitLink)}
            >
              <span className="iconWrapper">
                View codes in
                <SVG icon="GitHub" />
              </span>
            </Button>
          )}
        </div>
        <div className="text">
          <span className="stacks">Main Stacks : {stacks}</span>
          {description}
        </div>
      </div>
      <figure>
        <img src={img} alt={`${title} preview img`} />
      </figure>
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  padding-top: 5rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  overflow: hidden;

  &:first-of-type {
    padding: 0;
  }

  div.details {
    width: 50%;
    padding-bottom: 1rem;
    div.boxTop {
      display: flex;
      div.title {
        display: flex;
        gap: 0.5rem;
        align-items: flex-end;
        margin-bottom: 0.5rem;
        padding-right: 0.7rem;
        h6 {
          font-family: 'Poppins', sans-serif;
          font-weight: 900;
          font-size: 2rem;
          color: ${({ theme: { colors } }) => colors.title};
          max-width: 280px;
        }
        p {
          font-size: 0.9rem;
          text-align: justify;
          white-space: nowrap;
          line-height: 2.5rem;
        }
      }
    }

    div.buttons {
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-bottom: 2rem;
      button {
        height: 2.15rem;
        line-height: 2.15rem;
        padding: 0 1rem;
      }
      button.gitBtn {
        span.iconWrapper {
          display: flex;
          align-items: center;
          figure {
            display: flex;
            height: 100%;
            align-items: center;
            svg {
              height: 1.25rem;
            }
          }
        }
      }
    }
  }

  div.text {
    transform: translateX(-50px);
    opacity: 0.5;
    transition: 0.6s;
    transition-timing-function: ease-out;
    span.stacks {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    ul {
      width: 100%;
      li {
        position: relative;
        padding-left: 1rem;
        padding: 0.5rem 0 0.5rem 1rem;
        line-height: 150%;
        &::after {
          position: absolute;
          left: 0;
          top: 0.4rem;
          content: '»';
        }
      }
    }
  }

  > figure {
    width: 50%;
    height: 25rem;
    opacity: 0.4;
    transform: translateY(50px);
    transition: 0.6s;
    transition-timing-function: ease-in-out;
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  &.imageActive {
    > figure {
      transform: translateY(0);
      opacity: 1;
    }
    div.text {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media screen and (min-width: 1081px) {
    div.boxTop {
      flex-direction: column;
      justify-content: flex-start;
    }
    &:nth-of-type(odd) {
      flex-direction: row;
    }
    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    div.details {
      width: 100%;
      div.boxTop {
        flex-direction: row;
        gap: 1rem;
        justify-content: flex-start;
        align-items: center;
        div.title {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
    > figure {
      width: 100%;
    }
  }

  @media screen and (min-width: 474px) {
    div.buttons {
      flex-direction: row;
    }
  }

  @media screen and (max-width: 474px) {
    div.buttons {
      flex-direction: column;
      button {
        width: 100%;
      }
      button.gitBtn {
        span.iconWrapper {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;

const Number = styled.h5`
  height: 9rem;
  line-height: 9rem;
  font-size: 12rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  color: ${({ theme: { colors } }) => `${colors.font}70`};
  margin-bottom: 1rem;

  transition: 1.2s;
  transition-timing-function: ease-in-out;
  transform: translateX(120px);
  transform-origin: right bottom;
  opacity: 0;
  &.active {
    transform: translateX(0);
    opacity: 1;
  }

  @media screen and (max-width: 1080px) {
    height: 7rem;
    line-height: 7rem;
    font-size: 9rem;
  }
`;

export default WorkItem;
