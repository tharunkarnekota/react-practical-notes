import React from 'react'

const App = () => {

  const arr =["react js","node js","express js","angular js"]

  return (
    <div>
      {
        arr.map(
          (value,index) => <li key={index}>{value}</li>
        )
      }
    </div>
  )
}

export default App