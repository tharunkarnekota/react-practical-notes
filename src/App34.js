import React,{useEffect,useState} from 'react'

const App = () => {

  const[data,setData] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos'
    ).then(  values => values.json()                             //converting to json format
    ).then(  jsonResult =>setData(jsonResult))
  },[])

  return (
    <div>
      <h2>hello world!</h2>
      {data.map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default App