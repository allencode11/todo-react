import { useState, useEffect } from 'react';
import TodoList from './Todo/TodoList/TodoList';
import AddTodo from './Todo/AddTodo/AddTodo';
import Context from './context';
import Loader from './Loader/Loader'
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 3000)

      })
  },[])

  const toggleTodo = (id) => {
    setTodos(todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo
    }));
    console.log('todos: ', todos);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(element => element.id !== id))
  }

  const addTodo = (title) => {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
        ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>React tutorial</h1>
        <AddTodo onCreate={addTodo}/>
        {
          loading && <Loader />
        }
        {
          todos.length ?
            <TodoList todos={todos} onToggle={toggleTodo}/> :
            loading ? null : <h3>No items</h3>

        }
      </div>
    </Context.Provider>

  );
}

export default App;
