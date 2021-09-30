import React,{createContext} from 'react'
import ComponentC from './ComponentC'

export const store = createContext();

const App = () => {
  return (
    <div>
      <center>
        <h2>hello world</h2>
        <store.Provider value={"tharun karnekota"}>
          <ComponentC />
        </store.Provider>
      </center>
    </div>
  )
}

export default App