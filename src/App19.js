import React,{useState} from 'react';


const App = () => {

  const [data,setData] =  useState({
    username:'',
    password:'',
  })

  const {username,password} = data;

  const updatee = e =>{
    setData ({...data,[e.target.name]:[e.target.value]})
  }

  const submitHandler = e =>{
    e.preventDefault();
    console.log(data);
  }
  
  return (
    <div >
      <center>
        <form onSubmit={submitHandler}>
          <input type="text"     name="username"  value={username}  onChange={updatee}  placeholder="username" /> <br/>
          <input type="password" name="password"  value={password}  onChange={updatee}  placeholder="password" /> <br/>

          <input type="submit" name="submit"/>
        </form>
      </center>
    </div>
  )
}

export default App