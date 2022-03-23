import PropTypes from 'prop-types';
import { styles } from './TodoItem.styles'

const TodoItem = ({ todo, index, onChange}) => {
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

      <button className='rm'> &times;</button>
    </li>
  )
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}
export default TodoItem;