import { memo } from 'react';
import { useTodosDispatch } from '../../context/TodoContext';

export default memo(function TodoItem({ item }) {
  const dispatch = useTodosDispatch();

  const handleDeleteTodo = deleteId => {
    dispatch({
      type: 'deleted',
      deleteId,
    });
  };

  const handleToggleTodo = (id, done) => {
    dispatch({
      type: 'done',
      id,
      done,
    });
  };
  return (
    <label>
      <input
        type="checkbox"
        checked={item.done}
        onChange={e => handleToggleTodo(item.id, e.target.checked)}
      />
      <span>{item.done ? <del>{item.text}</del> : item.text}</span>
      <button onClick={() => handleDeleteTodo(item.id)}>X</button>
    </label>
  );
});
