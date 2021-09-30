import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext();

const App = () => {
  return (
    <div>
      <center>
        <h2>hello world</h2>
        <UserContext.Provider value={"tharun karnekota"}>
          <ComponentC />
        </UserContext.Provider>
      </center>
    </div>
  )
}

export default App