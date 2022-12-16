import React, {useEffect, useState} from 'react';
import axios from "axios";

const SearchingResult = (props) => {
    const[result,setResult]=useState({})
    const[type,setType]=useState()
    const [error,setError]=useState("");
    const [errorPicture,setErrorPicture]=useState("");
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.option}/${props.id}/`)
            .then(response => {
                console.log(response.data)
                if(props.option==="people"){
                    setType(false)
                }else{
                    setType(true)
                }
                setResult(response.data)
                setError("");
                setErrorPicture("");
                
            })
            .catch((erro) => {
                console.error("These aren't the droids you're looking for ==>"+erro)
                setError("These aren't the droids you're looking for");
                setErrorPicture("https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg");
                })
    }, [props.option,props.id]);
    return (<>
        {error.length>0 &&
                <div>
                    <p style={{color:"red"}}>error: {error}</p>
                    <img src={errorPicture} alt="Obi-Wan Kenobi" style={{width:"200px",height:"200px"}}/>
                </div>
            }
        {type?
            <div>
            <h1>{result.name}</h1>
            <p>Climate: {result.climate}</p>
            <p>terrain: {result.terrain}</p>
            <p>Population: {result.population}</p>
        </div>:
        <div>
        <h1>{result.name}</h1>
        <p>Height: {result.height} cm</p>
        <p>Hair Color: {result.hair_color}</p>
        <p>Eye Color: {result.eye_color}</p>
     </div>
        }
         </>  
    )
}

export default SearchingResult