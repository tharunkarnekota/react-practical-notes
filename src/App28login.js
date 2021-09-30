import React,{useState} from 'react'

const App = () => {

  const [data,setData] = useState({
    username : "",
    password : "",
  })

  const {username,password}=data;

  const changehandler = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }

  const submithandler = e =>{
    e.preventDefault()
    console.log(data)
  }
  return (
    <div>
      <center>
        <form onSubmit={submithandler}>
          <input type="text" name="username" value={username} onChange={changehandler}/><br/>
          <input type="password" name="password" value={password} onChange={changehandler}/><br/>

          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  )
}

export default App