import React,{useState} from 'react'
import axios from 'axios';

const App = () => {

  const [data,setData] = useState({
    username : "",
    email: "",
    password : "",
    confirmpassword : ""
  })

  const {username,email,password,confirmpassword}=data;

  const changehandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const submithandler = e =>{
    e.preventDefault()
    
    axios.post('https://sagar-de9eb-default-rtdb.firebaseio.com/register1.json',
    data).then(()=>alert("submitted succesfully"))  
    
  }
  return (
    <div>
      <center>
        <form onSubmit={submithandler}>
          <input type="text"     name="username"        value={username}        onChange={changehandler}/><br/>
          <input type="email"    name="email"           value={email}           onChange={changehandler}/><br/>
          <input type="password" name="password"        value={password}        onChange={changehandler}/><br/>
          <input type="password" name="confirmpassword" value={confirmpassword} onChange={changehandler}/><br/>

          

          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  )
}

export default App