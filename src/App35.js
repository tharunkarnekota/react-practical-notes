import React,{useEffect} from 'react'
import axios from 'axios'

const App = () => {

  useEffect(()=>{
   // axios.get("https://jsonplaceholder.typicode.com/todos").then(response => console.log(response))
   axios.get("https://jsonplaceholder.typicode.com/todos"
   ).then(response => console.log(response.data))
  },[])

  return (
    <div>
      <h2>hello world</h2>
    </div>
  )
}

export default App