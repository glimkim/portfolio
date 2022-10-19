import React, { HTMLAttributes, useCallback, useContext } from 'react';
import styled from '@emotion/styled';
import { PageThemeContext, PageThemeDispatch } from 'context/pageTheme';
import { ReactComponent as BtnIconDefault } from 'assets/icons/mode_icon_default.svg';
import { ReactComponent as BtnIconDark } from 'assets/icons/mode_icon_dark.svg';

function ThemeSwitch({ ...props }: HTMLAttributes<HTMLButtonElement>) {
  const pageTheme = useContext(PageThemeContext);
  const dispatch = useContext(PageThemeDispatch);

  const onToggleMode = useCallback(() => {
    dispatch && dispatch({ type: 'toggle' });
  }, [dispatch]);

  return (
    <StyledSwitch onClick={onToggleMode} {...props}>
      {pageTheme === 'default' ? <BtnIconDefault /> : <BtnIconDark />}
    </StyledSwitch>
  );
}

const StyledSwitch = styled.button`
  height: 2rem;
  border-radius: 100%;
  padding-left: 1.43rem;
  svg {
    height: 100%;
  }
`;

export default ThemeSwitch;
