import React from "react";

const Todo = (props) => {

    return (
        <div>
            <h2 className={`item${props.item.completed ? ' completed' : ''}`}
                onClick={(e) => {
                e.preventDefault()
                props.handleComplete(props.item.id)
            }} > {props.item.todo} </h2>
        </div>
    )
}

export default Todo;