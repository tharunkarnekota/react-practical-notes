import React from 'react'
import Audiofile from './laser.mp3'

const App = () => {
  return (
    <div>
      <center>
        <h2>hello world</h2>
        <audio controls>
          <source src={Audiofile} type="audio/ogg" />
        </audio>
          
      </center>
    </div>
  )
}

export default App