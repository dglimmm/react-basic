import { useState } from 'react';
import { useTodos, useTodosDispatch } from '../../context/TodoContext';

export default function AddTodo() {
  const todos = useTodos();
  const dispatch = useTodosDispatch();

  //1]added
  const handleAddTodo = text => {
    dispatch({
      type: 'added',
      nextId: todos.length,
      todoText: text,
    });
  };

  const [todoText, setTodoText] = useState('');
  return (
    <div>
      <input
        type="text"
        onChange={e => setTodoText(e.target.value)}
        value={todoText}
        onKeyUp={e => {
          if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
            handleAddTodo(e.target.value);
            setTodoText('');
          }
        }}
      />
      <button
        onClick={() => {
          //저장
          setTodoText('');
          handleAddTodo(todoText);
        }}
      >
        추가
      </button>
    </div>
  );
}
