import React from 'react'

const Display = (props) => {
return (
    <div>
        {props.todos.map((todo, idx) => <p>{todo.text}<input type="checkbox" checked={todo.completed} /></p>)}
    </div>
)
}

export default Display
