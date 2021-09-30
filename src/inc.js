import React from 'react'
import {connect} from 'react-redux'


const inc = ({count,increase,decrease}) => {
    return (
        <div>
            count from  Inc component : {count} <br/> <br />

            <button onClick={()=> increase()}>increment</button> &nbsp; &nbsp;
            <button onClick={()=> decrease()}>decrement</button>
        </div>
    )
}

    const mapStateToProps = (state) => ({
        count : state
    })

    const MapDispatchToProps = (dispatch) =>{
        return{
            //dispatching plain actions

            increase: () => { dispatch({type : 'INCREMENT'}) },
            decrease: () => { dispatch({type : 'DECREMENT'}) },
        }
    }

export default connect(mapStateToProps,MapDispatchToProps)(inc)
