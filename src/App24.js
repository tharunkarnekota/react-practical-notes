import React from 'react'

const App = () => {

  const names =["james","johnny","paul","ranjo","george"]

  const filtered = names.filter(name => name.includes('j'))


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