import { useState } from 'react';
import TodoList from './Todo/TodoList/TodoList';
import AddTodo from './Todo/AddTodo/AddTodo';
import Context from './context';

import './App.css';
import { element } from 'prop-types';

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
          todos.length > 0 ?
            <TodoList todos={todos} onToggle={toggleTodo}/> :
            <h3>No items</h3>

        }
      </div>
    </Context.Provider>

  );
}

export default App;
