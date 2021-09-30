import React,{useEffect} from 'react'

const App = () => {
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos'
    ).then(  response => response.json()
    ).then(  jsonResult =>console.log(jsonResult))
  },[])
  return (
    <div>
      <h2>hello world!</h2>
    </div>
  )
}

export default App