import { useContext } from 'react';
import PropTypes from 'prop-types';
import { styles } from './TodoItem.styles'
import Context from '../../context';

const TodoItem = ({ todo, index, onChange}) => {
  const { removeTodo } = useContext(Context)
  const classes = [];

  if(todo.completed)
    classes.push('done')

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}/>
        <strong>{index + 1 + ' '}</strong>
        &nbsp;
        {todo.title}
      </span>

      <button
        className='rm'
        // onClick={() => removeTodo(todo.id)}>
        onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  )
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}
export default TodoItem;