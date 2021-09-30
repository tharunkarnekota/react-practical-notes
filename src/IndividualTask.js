import React,{useEffect,useState} from 'react'


const IndividualTask = ({match}) =>{
    const [individual,setIndividual] = useState(null);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${match.params.id}`).then(
            response => response.json()).then(
                data => setIndividual(data)
        )
    },[])

    return (
        <div style={{"border":"1px solid black","padding":"10px","margin":"10px"}}>
            {individual != null ?
            <div>
                id : {individual.id} <br/>
                Title : {individual.title}<br />
            </div>:null}
        </div>
    )
}

export default IndividualTask