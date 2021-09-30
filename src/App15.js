import React,{useState,useEffect } from 'react';


const App = () => {
  const [count,setCount] = useState(0)

  useEffect(() => console.log("you have clicked"),[])
    
  
  return (
    <div >
      <center>
        <p>you clicked {count} times</p>
        <button onClick={()=> setCount(count+1)}>Click me</button>
      </center>
    </div>
  )
}

export default App