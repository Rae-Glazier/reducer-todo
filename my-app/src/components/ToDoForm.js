import React, { useState } from 'react';

const TodoForm = props => {
    const [todo, setTodo] = useState('')
    return(
        <form onSubmit={(event)=>{
            event.preventDefault()
            props.addTodo(todo)
            setTodo('')
        }}>
            <input 
                name='todo'
                placeholder='Add Task'
                value={todo}
                onChange={(event)=>{
                    setTodo(event.target.value)
                }}
            />
            <button type='submit'>Add</button>
        </form>
    )
}
export default TodoForm; 