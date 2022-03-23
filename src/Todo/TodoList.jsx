import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul>
      {
        props.todos.map((todo, index) => {
          return <TodoItem key={todo.id} todo={todo} index={index}/>;
        })
      }
    </ul>
  )
};

export default TodoList;