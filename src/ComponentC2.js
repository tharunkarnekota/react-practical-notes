import React,{useContext} from 'react'
import  {store} from './App.js';

const ComponentC = () => {
    const data = useContext(store)
    return (
        <div>
            content from component c {data}
            
        </div>
    )
}

export default ComponentC
