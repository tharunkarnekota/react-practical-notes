import React from 'react'
import { connect } from 'react-redux';
import { IncAction } from './action';
import { DecAction } from './action';


const App = ({local_variable,IncAction,DecAction}) => {
  return (
    <div>
      <center>
        <h2>{local_variable}</h2><br />
          <button onClick={()=>IncAction()}>Increment</button>
          <button onClick={DecAction}>Decrement</button>
      </center>
    </div>
  )
}

const mapStateToProps = state => ({
  local_variable : state
})
export default connect(mapStateToProps,{IncAction,DecAction})(App);