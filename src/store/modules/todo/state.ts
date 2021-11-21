export type Todo = {
  id: number;
  checkDate?: Date;
  completed: boolean;
  title: string;
};
export type TodoList = Todo[] | null;

export type State = {
  todoList: TodoList;
};
export const state: State = {
  todoList: null,
};
