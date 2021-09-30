import React,{useContext} from 'react'
import { store } from './App'

const ComponentY = () => {
    const [data,setData] = useContext(store)
    return (
        <div className="card">
            <div className="card-body">
                componentY {data}
            </div>
        </div>
    )
}

export default ComponentY
