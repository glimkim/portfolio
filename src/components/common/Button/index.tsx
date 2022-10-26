import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';

type ButtonTheme = 'default' | 'sub';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  children: React.ReactNode;
}

function Button({ theme = 'default', children, ...props }: ButtonProps) {
  return (
    <StyledButton buttonTheme={theme} type="button" {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ buttonTheme: ButtonTheme }>`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  background-color: ${({
    theme: {
      colors: { button },
    },
    buttonTheme,
  }) => (buttonTheme === 'default' ? button.default : button.sub)};
  box-shadow: 6px 5px ${({ theme: { colors } }) => colors.button.shadow};
  &,
  * {
    color: ${({ theme: { colors } }) => colors.button.font};
  }
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.pointColor};
  }
  white-space: nowrap;
`;

export default Button;
