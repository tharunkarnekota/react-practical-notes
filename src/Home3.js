import React from 'react'
import {useHistory} from 'react-router-dom'

const Home = () => {

    let history = useHistory();
    return (
        <div>
            <center>
                <h4>Welcome to Home page!!</h4>
                <button onClick={()=> history.push('/dashboard')}>login</button>
                
            </center>
            
        </div>
    )
}

export default Home


