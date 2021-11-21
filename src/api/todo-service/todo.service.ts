import MockData from './mock.json';
import { TodoList } from 'src/store/modules/todo/state';

export async function loadTodo(): Promise<TodoList> {
  return new Promise((resolve) => {
    resolve(MockData);
  });
}
