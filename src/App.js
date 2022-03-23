import { useState } from 'react';
import TodoList from './Todo/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, completed: false, title: 'some random text'},
    {id: 2, completed: false, title: 'another random text'},
    {id: 3, completed: false, title: 'also random text'},
  ]);

  const toggleTodo = (id) => {
    setTodos(todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo
    }));
    console.log('todos: ', todos);
  }

  return (
    <div className='wrapper'>
     <h1>React tutorial</h1>
      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
