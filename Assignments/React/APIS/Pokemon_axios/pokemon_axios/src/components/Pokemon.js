import React,{useState} from 'react'
import axios from 'axios';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => setPokemon(response.data.results))
            .catch(error=>console.error(error))
    };

    return (
        <div>
            <button onClick = {fetchPokemon} >Fetch Pokemon</button>
            {pokemon!=null && pokemon.map((pok, index)=>{
                return (<li key={index}>{pok.name}</li>)
            })}
        </div>
    )
}

export default Pokemon