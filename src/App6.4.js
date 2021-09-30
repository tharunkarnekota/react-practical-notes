import React,{useState,useEffect } from 'react';


const App = () => {
  const [age,setAge] = useState(19)

  useEffect(() => console.log("you have clicked"+count),[count])
    
  
  return (
    <div >
      <center>
        <p>my name is kalyan with {age} years</p>
        <button onClick={()=> setAge(age+1)}>Click me for increment</button>
      </center>
    </div>
  )
}

export default App