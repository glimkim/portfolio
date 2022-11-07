import React, { HTMLAttributes } from 'react';
import * as icons from 'assets/icons';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type IconType = keyof typeof icons;

interface SVGProps extends HTMLAttributes<SVGSVGElement> {
  icon: IconType;
}

function SVG({ icon }: SVGProps) {
  const SVGImg: React.FunctionComponent<React.SVGProps<SVGSVGElement>> =
    icons[icon];

  return (
    <Img icon={icon}>
      <SVGImg />
    </Img>
  );
}

const Img = styled.figure<{ icon: IconType }>`
  ${({ theme: { colors }, icon }) => {
    const iconsToColor: IconType[] = ['GitHub', 'Notion', 'LinkedIn', 'Mode'];
    let styles = ``;
    if (iconsToColor.includes(icon)) {
      styles += `svg {
          path {
            fill: ${colors.icon};
          }
        }`;
    }
    return css`
      ${styles}
    `;
  }}
`;

export default SVG;
