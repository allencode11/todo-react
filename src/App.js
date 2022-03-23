import TodoList from './Todo/TodoList';
import './App.css';

function App() {
  const todos = [
    {id: 1, completed: false, title: 'some random text'},
    {id: 2, completed: false, title: 'another random text'},
    {id: 3, completed: false, title: 'also random text'},
  ]
  return (
    <div className='wrapper'>
     <h1>React tutorial</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
