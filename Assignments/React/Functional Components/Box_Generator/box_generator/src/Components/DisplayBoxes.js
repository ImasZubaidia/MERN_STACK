import React from 'react';
function DisplayBoxes(props){
    const { boxes } = props;
    return(
        boxes.map((box, i) => {
                return (
                    <div className="boxes">
                        <div key={i} style={{ backgroundColor: box.color, height: box.height+"px", width: box.width+"px", margin: '6px' }}></div>
                    </div>
                )
            })

        
    )
}

export default DisplayBoxes;
