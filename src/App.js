import {useEffect, useState} from 'react'
import { TodoItem } from './components/TodoItem/index';
import './App.css';


export const App = () => {


  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const createTodo = () => {
    let arr = [...todos, {text: inputValue, complete: false }]
    if(inputValue){
      setTodos(arr); // update or modify todos
      setInputValue("") // clear input
      localStorage.setItem("todos", JSON.stringify(arr));  // save in localSt
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

  const completeTodo = (id) => {
      let arr = [...todos];
      arr[id].complete = !arr[id].complete
      setTodos(arr)
      localStorage.setItem("todos", JSON.stringify(arr))
  }

  const deleteTodo = (id) => {
    // console.log(id)
    let arr = [...todos];
    arr.splice(id, 1)
    setTodos(arr)
    localStorage.setItem("todos", JSON.stringify(arr))
  }



  return (
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
      { todos && // true Болсо 
        todos.map((el, id) => {
          return  <TodoItem 
                       completeTodo={completeTodo} 
                       deleteTodo={deleteTodo} 
                       todo={el} 
                       id={id} 
                       key={id}  />
        })
      }
    </div>
  );
}

