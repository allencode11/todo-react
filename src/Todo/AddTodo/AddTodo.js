import { useState } from 'react';
import { styles } from './AddTodo.styles';
import PropTypes from 'prop-types';

const useInputValue = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value

  }
}


const AddTodo = ({ onCreate }) => {
  const input = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if(input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        {...input.bind}
      />
      <button type='submit'> Add todo </button>
    </form>
  )
};

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo;