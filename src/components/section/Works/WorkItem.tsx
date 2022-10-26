import styled from '@emotion/styled';
import Button from 'components/common/Button';
import SVG from 'components/common/SVG';
import React, { useCallback } from 'react';
import { ItemInfo } from './WorkList';

interface ItemProps {
  index: number;
  itemInfo: ItemInfo;
}

function WorkItem({
  index,
  itemInfo: { title, date, link, gitLink, description, img, gitCodeDisabled },
}: ItemProps) {
  const onClickBtn = useCallback((_link: string) => {
    window.open(_link);
  }, []);

  return (
    <Item data-name={title}>
      <div className="details">
        <div className="boxTop">
          <Number>{index + 1}</Number>
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
        <p>{description}</p>
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
        h6 {
          font-family: 'BlackHanSans';
          font-size: 1.85rem;
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
              path {
                fill: #333;
              }
            }
          }
        }
      }
    }
  }
  > figure {
    width: 50%;
    height: 25rem;
    img {
      width: 100%;
      object-fit: contain;
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
    }
  }
`;

const Number = styled.h5`
  height: 9rem;
  line-height: 9rem;
  font-size: 11rem;
  font-family: 'BlackHanSans';
  color: ${({ theme: { colors } }) => `${colors.font}70`};
  margin-bottom: 1rem;

  @media screen and (max-width: 1080px) {
    height: 7rem;
    line-height: 7rem;
    font-size: 9rem;
  }
`;

export default WorkItem;
