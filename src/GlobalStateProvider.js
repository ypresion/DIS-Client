import React from "react"

/**
 * Global state provider.
 * 
 * It enables global state to be shared and changed between its children components.
 * 
 * @author Sylwia Krupa | w18015597
 */

let initialGlobalState; 
if (localStorage.getItem('authToken') !== null) {
  initialGlobalState = {
    authorised: true
  }
} else {
  initialGlobalState = {
    authorised: false
  }
}

export const GlobalStateContext = React.createContext({
  state: initialGlobalState,
  dispatch: () => null
});

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer((state, newValue) => ({ ...state, ...newValue }), initialGlobalState)

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  )
}