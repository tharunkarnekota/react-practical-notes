import React from 'react'

const App = () => {

  const arr =["react js","node js","express js","angular js"]

  return (
    <div>
      {
        arr.map(
          (value,index) => <li>{value}</li>
        )
      }
    </div>
  )
}

export default App