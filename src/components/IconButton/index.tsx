import styled from '@emotion/styled';
import SVG, { IconType } from 'components/SVG';
import React, { HTMLAttributes } from 'react';

interface IconBtnProps extends HTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

function IconBtn({ icon, ...props }: IconBtnProps) {
  return (
    <IconButton type="button" {...props}>
      <SVG icon={icon} />
    </IconButton>
  );
}

const IconButton = styled.button`
  transform: scale(1, 1);
  transition: 0.3s;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export default IconBtn;
