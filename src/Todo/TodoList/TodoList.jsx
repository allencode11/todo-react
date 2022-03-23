import TodoItem from '../TodoItem/TodoItem';
import PropTypes from 'prop-types';
import { styles } from './TodoList.styles'

const TodoList = (props) => {
  return (
    <ul style={styles.ul}>
      {
        props.todos.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              onChange={props.onToggle}
            />
          )
        })
      }
    </ul>
  )
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList;