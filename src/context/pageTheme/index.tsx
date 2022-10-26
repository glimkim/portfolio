import React, { createContext, Dispatch, useReducer } from 'react';

export type PageTheme = 'dark' | 'default';
interface PageThemeAction {
  type: 'toggle' | 'set';
  newTheme?: PageTheme;
}

export const PageThemeContext = createContext<PageTheme>('default');
export const PageThemeDispatch =
  createContext<Dispatch<PageThemeAction> | null>(null);

interface PageThemeProviderProps {
  children: React.ReactNode;
}

function PageThemeProvider({ children }: PageThemeProviderProps) {
  const reducer = (state: PageTheme, action: PageThemeAction) => {
    switch (action.type) {
      case 'toggle':
        return state === 'default' ? 'dark' : 'default';
      case 'set':
        return action.newTheme!;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 'default');

  return (
    <PageThemeContext.Provider value={state}>
      <PageThemeDispatch.Provider value={dispatch}>
        {children}
      </PageThemeDispatch.Provider>
    </PageThemeContext.Provider>
  );
}

export default PageThemeProvider;
