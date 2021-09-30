import React,{useState} from 'react'

const App = () => {
  const [name,setName] = useState("telugu skills in function")
  return (
    <div>
      <h2>Welcome to {name}</h2>
    </div>
  )
}

export default App