import React,{useState} from 'react';


const App = () => {
  const [count,setCount] = useState(0)
  
  return (
    <div >
      <center>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>Change</button>
      </center>
    </div>
  )
}

export default App