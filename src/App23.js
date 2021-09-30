import React from 'react'

const App = () => {

  const arr =[{
    id:1,
    title:"React jss"
  },
  {
    id:2,
    title:"node jss"
  },
  {
    id:3,
    title:"express js"
  },
  {
    id:4,
    title:"angular js"
  }]

  return (
    <div>
      {
        arr.map( value => <li key={value.id}>{value.title}</li>
        )
      }
    </div>
  )
}

export default App