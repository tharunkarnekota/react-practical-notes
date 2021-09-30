import React,{useState} from 'react'
import { Redirect } from 'react-router';

const Home = () => {

    const [data,setData] = useState(false);
    if(data){
        return <Redirect to='/dashboard' />
    }
    return (
        <div>
            <center>
                <h4>Welcome to Home page!!</h4>
                <button className="btn btn-primary" onClick={()=> setData(true)}>Login</button>
            </center>
            
        </div>
    )
}

export default Home