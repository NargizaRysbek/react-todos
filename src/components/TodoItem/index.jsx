import React from 'react'


export const TodoItem = ({ todo }) => {
    return (
        <div className="todo-item">
            {todo.text}
            <button>complite</button>
            <button>delete</button>
        </div>
    )
}