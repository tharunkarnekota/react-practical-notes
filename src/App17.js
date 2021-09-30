import React,{useState} from 'react';


const App = () => {

  const [user,setUser] = useState("");

   
  return (
    <div >
      <center>
        <input type="text" placeholder="username" value={user} name="user" onChange={e=> setUser(e.target.value)}></input>
        <br></br>
        {user}
      </center>
    </div>
  )
}

export default App