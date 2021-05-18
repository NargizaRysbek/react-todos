import {useState} from 'react'
import { TodoItem } from './components/TodoItem/index';
import './App.css';


export const App = () => {


  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] =useState("");

  const createTodo = () => {
    setTodos([...todos, {text: inputValue}]);
    setInputValue("")
  };



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
          return  <TodoItem todo={el} id={id}  />
        })
      }
    </div>
  );
}

