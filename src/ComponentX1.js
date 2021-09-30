import React,{useContext} from 'react'
import { store } from './App'

const ComponentX = () => {
    const [data,setData] = useContext(store)
    return (
        <div>
            componentX {data}
        </div>
    )
}

export default ComponentX
