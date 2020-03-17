import React, { useState } from 'react';

export const TodoForm = props => {
    const [task, setTask] = useState('')
    return(
        <form onSubmit={(event)=>{
            event.preventDefault()
            props.addTodo(task)
            setTask('')
        }}>
            <input 
                name='task'
                placeholder='Add Task'
                value={form}
                onChange={(event)=>{
                    setTask(event.target.value)
                }}
            />
            <button type='submit'>Add Task</button>
        </form>
    )
}