import React,{useContext} from 'react'
import { store } from './App'


const Countt = () => {
    const [data,setData] = useContext(store);
    return (
        <div className="card">
            <div className="card-body">
                component count: {data.length}
            </div>
        </div>
    )
}

export default Countt
