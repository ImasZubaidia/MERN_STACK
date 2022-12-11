import React, { useState } from 'react';
import DisplayBoxes from './DisplayBoxes';
function BoxGen(){
    const [ boxes, setBoxes] = useState([]);
    const[color,setColor] = useState()
    const[width,setWidth] = useState()
    const [height, setHeight] = useState()
  
    function handleSubmit(e) {
        e.preventDefault()
        setBoxes(prev => prev.concat({color,width,height}))
        setColor("")
        setHeight("")
        setWidth("")
    }
  
    return(
      <>
        
        <div className="box">
        <form onSubmit={handleSubmit} className="formUser">
            <h1>Generate a Box</h1>
            <div className="form-group">
                <input value={color} type="text" placeholder="Choose a Color" onChange={e => setColor(e.target.value)} />
            </div><br />
            <div className="form-group">
                <input value={width} type="text" placeholder="Choose the width" onChange={e => setWidth(e.target.value)} />
            </div><br />
            <div className="form-group">
                <input value={height} type="text" placeholder="Choose the height" onChange={e => setHeight(e.target.value)} />
            </div><br />

            <button>Grnarate a Box</button>
          </form>
          
        <DisplayBoxes boxes={boxes}/>

        </div>
        
        </>
    )
}

export default BoxGen;
