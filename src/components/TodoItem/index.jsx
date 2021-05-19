import React from 'react'


export const TodoItem = ({ todo, id, deleteTodo, completeTodo}) => {
    return (
        <div className="todo-item" style={todo.complete ? ready : notReady}>
            {todo.text}
            <button onClick={() => completeTodo(id)}>{todo.complete ? "отменить" : "выполнено"}</button>
            <button onClick={() => { deleteTodo(id)}}>delete</button>
        </div>
    )
}


const ready = {
    textDecoration: "line-through"
}

const notReady = {
    textDecoration: "none"
}