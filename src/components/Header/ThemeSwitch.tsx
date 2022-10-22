import React, { HTMLAttributes, useCallback, useContext } from 'react';
import styled from '@emotion/styled';
import { PageThemeDispatch } from 'context/pageTheme';
import SVG from 'components/SVG';

function ThemeSwitch({ ...props }: HTMLAttributes<HTMLButtonElement>) {
  const dispatch = useContext(PageThemeDispatch);

  const onToggleMode = useCallback(() => {
    dispatch && dispatch({ type: 'toggle' });
  }, [dispatch]);

  return (
    <StyledSwitch onClick={onToggleMode} {...props}>
      <SVG icon="Mode" />
    </StyledSwitch>
  );
}

const StyledSwitch = styled.button`
  height: 2rem;
  border-radius: 100%;
  padding-left: 1.43rem;
  figure {
    height: 40px;
    svg {
      height: 100%;
    }
  }
`;

export default ThemeSwitch;
