import React from "react"

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