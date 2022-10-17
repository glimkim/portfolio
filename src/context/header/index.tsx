import React, { createContext, Dispatch, useReducer } from 'react';

interface HeaderStateAction {
  type: 'toggle';
}

export const HeaderStateContext = createContext(false);
export const HeaderStateDispatch =
  createContext<Dispatch<HeaderStateAction> | null>(null);

interface ProviderProps {
  children: React.ReactNode;
}

function HeaderStateProvider({ children }: ProviderProps) {
  const reducer = (state: boolean, action: HeaderStateAction) => {
    switch (action.type) {
      case 'toggle':
        return !state;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, false);

  return (
    <HeaderStateContext.Provider value={state}>
      <HeaderStateDispatch.Provider value={dispatch}>
        {children}
      </HeaderStateDispatch.Provider>
    </HeaderStateContext.Provider>
  );
}

export default HeaderStateProvider;
