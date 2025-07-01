// import './App.css';
import TodoList from './components/todo/TodoList';
import AddTodo from './components/todo/AddTodo';
import { TodoProvider } from './context/TodoContext';

export default function AppTodo() {
  return (
    <TodoProvider>
      <h2>할일목록</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}
