import React,{useState} from 'react'
import Data from './city.json';
const App = () => {
  const [search,setSearch] = useState('');
  return (
    <div>
      <center>
        <h2>Enter Your City:</h2>
        <input type="text" value={search} onChange={(e) =>setSearch(e.target.value)} /><br />
        {Data.map(city =>{
          return <div>
            {city.name}
          </div>
        })}
      </center>
    </div>
  )
}

export default App
