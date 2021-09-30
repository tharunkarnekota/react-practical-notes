import React,{useState} from 'react'
import Data from './city.json';
const App = () => {
  const [search,setSearch] = useState('');
  return (
    <div>
      <center>
        <h2>Enter Your City:</h2>
        <input type="text" value={search} onChange={(e) =>setSearch(e.target.value)} /><br />
        {Data.filter(city =>city.name.toLowerCase().includes(search)).map(city =>{
          return <div style={{"border":"1px solid black","padding":"10px","margin":"20px","maxWidth":"70%"}}>
            {city.name}
          </div>
        })}
      </center>
    </div>
  )
}

export default App
