import React from "react"
/**
 * Global state provider.
 * 
 * It enables global state to be shared and changed between its children components.
 * 
 * @author Sylwia Krupa | w18015597
 */

let initialGlobalState; 

//Global state gets initialized again on refresh - to persist it on 
//page reload it needs to be populated from local storage.
if (localStorage.getItem('authToken') !== null) {
  initialGlobalState = {
    authorised: true,
    readingList: JSON.parse(localStorage.getItem('readingList'))
  }
} else {
  initialGlobalState = {
    authorised: false,
    readingList: []
  }
}

//React Context allows for creating global state available to children components
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