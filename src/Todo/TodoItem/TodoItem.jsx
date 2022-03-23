import PropTypes from 'prop-types';
import { styles } from './TodoItem.styles'
const TodoItem = ({ todo, index }) => {
  return (
    <li style={styles.li}>
      <span>
        <input type="checkbox" style={styles.input}/>
        <strong>{index + 1 + ' '}</strong>
        {todo.title}
      </span>

      <button className='rm'> &times;</button>
    </li>
  )
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}
export default TodoItem;