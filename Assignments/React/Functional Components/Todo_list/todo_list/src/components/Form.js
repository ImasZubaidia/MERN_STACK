import React, { useState } from 'react'

const Form = (props) => {
    const [todo, setTodo] = useState({});
    const fun1 = (e) => {
        setTodo({
            id: props.todos.length,
            text: e.target.value,
            completed: false,
    })
}
    const handleSubmit = (e) => {
        e.preventDefault();
        props.myfun(todo);

}

return (
    <div>
        <form onSubmit={e => handleSubmit}>
            <p><input type="text" onChange={e => fun1} /></p>
            <p><input type="submit"/></p>
        </form>
    </div>
)
}

export default Form
