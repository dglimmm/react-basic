import TodoItem from './TodoItem';
import { useTodos } from '../../context/TodoContext';
import { useMemo, useState } from 'react';
export default function TodoList() {
  const todos = useTodos();
  //완료된 항목 보기 토글 정보
  const [isDone, setIsDone] = useState(false);
  const getFilteredTodos = () => {
    if (!isDone) {
      return todos;
    }
    return todos.filter(todo => todo.done);
  };
  const filteredTodos = getFilteredTodos();

  const getStatsCount = () => {
    const totalCount = todos.length;
    const doneCount = todos.filter(todo => todo.done).length;
    return {
      totalCount,
      doneCount,
    };
  };
  // useMemo 2가지 파라미터, 1. 계산함수, 2. 계산함수에서 사용하는 의존된 상태
  // 언제사용 ? 큰 배열을 필터링 또는 변환하거나 비용이 많이 드는 계산 수행시
  // 메모이제이션
  const { totalCount, doneCount } = useMemo(() => getStatsCount(), [todos]);

  return (
    <>
      <div>
        <input
          id="isDone"
          type="checkbox"
          checked={isDone}
          onChange={e => setIsDone(e.target.checked)}
        />
        <label htmlFor="isDone">
          완료된 항목 보기({doneCount}/{totalCount})
        </label>
      </div>
      <ul>
        {filteredTodos.map(item => (
          <li key={item.id}>
            <TodoItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
