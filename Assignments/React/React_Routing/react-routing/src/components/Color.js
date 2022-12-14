
import React from 'react'

const Color = (props) => {
    const style = {
        color: props.c1,
        background: props.c2
    };
    return (
        <div style={style}>
        <h1>The word is {props.text}</h1>
        </div>
    )
}

export default Color