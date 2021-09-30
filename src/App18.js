import React,{useState} from 'react';


const App = () => {

  const [user,setUser] = useState("");

   const handlerr = e =>{
     setUser(e.target.value)
   }
 
  return (
    <div >
      <center>
        <input type="text" placeholder="username" value={user} name="user" onChange={handlerr}></input>
        
        <br></br>
        {user}
      </center>
    </div>
  )
}

export default App