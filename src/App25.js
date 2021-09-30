import React from 'react'

const App = () => {

  const names =[10,20,30,40,50]

  const filtered = names.filter(value => value>30)


  return (
    <div>
      {
        filtered.map( value => <li >{value}</li>
        )
      }
    </div>
  )
}

export default App