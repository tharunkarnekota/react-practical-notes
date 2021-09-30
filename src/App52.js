import React from 'react'
import Thumbnail from './react.jpg';


const App = () => {
  return (
    <div>
      <center>
        <img src={Thumbnail} alt="thumbnail" height="550" width="450" /><br /><br />
        {/* <a href={Thumbnail} className="btn btn-primary" download> Click here to download</a> */}
        <a href={Thumbnail} className="btn btn-primary" download="Tharun"> Click here to download</a>
      </center>
    </div>
  )
}

export default App
