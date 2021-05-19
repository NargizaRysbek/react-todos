import {useState} from 'react'
import { TodoItem } from './components/TodoItem/index';
import './App.css';


export const App = () => {


  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const createTodo = () => {
    inputValue && setTodos([...todos, {text: inputValue, complete: false }]);
    setInputValue("")
  };
  // console.log(todos)

  const completeTodo = (id) => {
      let arr = [...todos];
      arr[id].complete = !arr[id].complete
      setTodos(arr)
      console.log(todos)
  }

  const deleteTodo = (id) => {
    // console.log(id)
    let arr = [...todos];
    arr.splice(id, 1)
    setTodos(arr)
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
      {
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

