import React,{useContext} from 'react'
import { store } from './App'

const ComponentX = () => {
    const [data,setData] = useContext(store)
    return (
        <div className="card">
            <div className="card-body">
                componentX {data}
            </div>
        </div>
    )
}

export default ComponentX
