import React,{useState} from 'react';


const App = () => {
  const [name,setName] = useState("tharun kalyan")
  
  return (
    <div >
      <center>
        <h1>{name}</h1>
        <button onClick={()=> setName("karnekota Tharun")}>Change</button>
      </center>
    </div>
  )
}

export default App