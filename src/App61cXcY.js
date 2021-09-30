import React,{createContext,useState} from 'react'
import ComponentX from './ComponentX'
import ComponentY from './componentY'

export const store = createContext();

const App = () => {
  const [data,setData] = useState(0);
  return (
    <div>
      <store.Provider value={[data,setData]}>
        <center>
          <ComponentX />
          <ComponentY />
        </center>
      </store.Provider>
    </div>
  )
}

export default App
