import React,{useContext} from 'react'
import { store } from './App'

const ComponentY = () => {
    const [data,setData] = useContext(store)
    return (
        <div>
            componentY {data}
        </div>
    )
}

export default ComponentY
