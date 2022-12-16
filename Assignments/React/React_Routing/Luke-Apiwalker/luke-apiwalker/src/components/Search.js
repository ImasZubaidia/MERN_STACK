import React,{useState} from 'react'
import { Router,navigate } from '@reach/router'
import SearchingResult from './SearchingResult';
const Search = () => {
    const [search,setSearch]=useState("people")
    const options=["people", "planets"]
    const[id,setId]=useState(1)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSearch(e.target.value)
        if(search === options[0]) {
            navigate("/people/"+id)
        } else {
            navigate("/planets/"+id)
        }
    }
    return (
        <div>
            <div>
            <form onSubmit ={handleSubmit}>
                <label>Search for: </label> 
                <select name="search" value={search}  onChange={ e => setSearch(e.target.value) }>
                    {
                        options.map((name, i) => 
                            <option value={ name } key={ i }>{ name }</option>
                        )
                    }
                </select>            
                <label>Id: </label> 
                <input type="text" value={id} onChange={ e => setId(e.target.value) }/>
            <button className="btn btn-primary">Search</button>
            </form>
        </div>
        
        </div>
    )
}

export default Search