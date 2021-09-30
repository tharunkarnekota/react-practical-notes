import React from 'react'
import Videofile from './react2.mp4'

const App = () => {
  return (
    <div>
      <center>
        <h2>hello world</h2>
        <video width="320" height="250" controls>
          <source src={Videofile} type="video/mp4" />
        </video>
          
      </center>
    </div>
  )
}

export default App