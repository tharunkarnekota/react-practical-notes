import React from 'react'
import { connect } from 'react-redux';
import Inc from './inc';



const App = ({count}) => {
  return (
    <div>
      <center>
        <h2>hello world</h2>
          count from app js Component : {count} <br/><br/>
          <Inc />
      </center>
    </div>
  )
}

const mapStateToProps = (state) =>({
  count : state
})

export default connect(mapStateToProps)(App)