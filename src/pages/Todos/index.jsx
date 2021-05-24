import React, {useEffect, useState} from 'react'
import { TodoItem } from '../../components/TodoItem/';
import {Context} from '../../context'


export const Todos = () => {


    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const createTodo = () => {
        let arr = [...todos, { text: inputValue, complete: false }]
        if (inputValue) {
            setTodos(arr); // update or modify todos
            setInputValue("") // clear input
            updateLocalTodos(arr)// save in localSt
        }
    };
    // console.log(todos)

    // useEffect(() => {
    //  console.log("test useEffect")
    //  alert("Изменились данные")
    // }, [todos])

    useEffect(() => {
        // getting values of LS
        let localTodos = JSON.parse(localStorage.getItem("todos"))
        // если в лок ст есть данные то вытаскиваем, если нет данных, то оставляем пустой массив
        // check for emptyness local St
        localTodos && setTodos(localTodos)
    }, [])


    const updateLocalTodos = (arr) => {
        localStorage.setItem("todos", JSON.stringify(arr))
    }
    const completeTodo = (id) => {
        let arr = [...todos];
        arr[id].complete = !arr[id].complete
        setTodos(arr)
        updateLocalTodos(arr)
    }

    const deleteTodo = (id) => {
        // console.log(id)
        let arr = [...todos];
        arr.splice(id, 1)
        setTodos(arr)
        updateLocalTodos(arr)
    }


    return (
        <div>
            <Context.Provider value={{ completeTodo, deleteTodo }}>
                <div className="App">
                    <div>
                        <input
                            placeholder="type something..."
                            type="text"
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value)
                            }}
                        />

                        <button onClick={createTodo}>Add</button>

                    </div>
                    {todos && // true Болсо 
                        todos.map((el, id) => {
                            return <TodoItem
                                todo={el}
                                id={id}
                                key={id} />
                        })
                    }
                </div>
            </Context.Provider>
        </div>
    )
}