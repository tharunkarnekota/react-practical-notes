import React,{useState} from 'react';
import './App.css';

const App = () => {
const [data,setData] = useState("");
const [result,setResult] = useState(0);

const changehandler = e =>{
  setData(e.target.value);
}

  return (
    <div>
      <center>
        <input type="text" name="data" value={data} onChange={changehandler}/><br />
        <button onClick={()=> setResult(eval(data))}>Result</button>
        <h2>Result is : {result}</h2>

        <br/><br />

        <button onClick={()=> setData(data+1)}>1</button>
        <button onClick={()=> setData(data+2)}>2</button>
        <button onClick={()=> setData(data+3)}>3</button>
        <button onClick={()=> setData(data+4)}>4</button>
        <button onClick={()=> setData(data+5)}>5</button><br/>

        <button onClick={()=> setData(data+6)}>6</button>
        <button onClick={()=> setData(data+7)}>7</button>
        <button onClick={()=> setData(data+8)}>8</button>
        <button onClick={()=> setData(data+9)}>9</button>
        <button onClick={()=> setData(data+0)}>0</button><br/>

        <button onClick={()=> setData(data+'+')}>+</button>
        <button onClick={()=> setData(data+'-')}>-</button>
        <button onClick={()=> setData(data+'*')}>*</button>
        <button onClick={()=> setData(data+'/')}>/</button>
        <button onClick={()=> setData('')}>clr</button>
      </center>


      
    </div>
  )
}

export default App