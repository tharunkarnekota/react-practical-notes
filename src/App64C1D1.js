import React,{createContext,useState} from 'react'
import Count from './Countt';
import Display from './Displayy';

export const store = createContext();

const App = () => {
  const [data,setData] = useState([
    {
      brandname : "nokia"
    },
    {
      brandname : "realme"
    },
    {
      brandname : "Mi"
    }
]);
  return (
    <div>
      <store.Provider value={[data,setData]}>
        <center>
          <Count />
          <Display />
          
        </center>
      </store.Provider>
    </div>
  )
}

export default App
