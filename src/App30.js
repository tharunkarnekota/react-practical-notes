import React,{useState} from 'react'

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
    if(password === confirmpassword)
    {
      console.log(data)
    }else{
      console.log("not matched")
    }
    
    
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