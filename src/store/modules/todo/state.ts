export type Todo = {
  id: number;
  checkDate?: Date;
  completed: boolean;
  title: string;
};
export type TodoList = Todo[] | null;

export interface State {
  todoList: TodoList;
}

export default function state(): State {
  return { todoList: null };
}
