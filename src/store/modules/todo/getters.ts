import { GetterTree } from 'vuex';
import { State as RootState } from '../../state';
import { State, TodoList, Todo } from './state';

export type Getters<S = State> = {
  completedTodoList(state: S): TodoList;
  uncompletedTodoList(state: S): TodoList;
};

export const getters: GetterTree<State, RootState> & Getters = {
  completedTodoList(state: State): TodoList {
    return state.todoList && state.todoList.filter((x: Todo) => x.completed);
  },
  uncompletedTodoList(state: State): TodoList {
    return state.todoList && state.todoList.filter((x: Todo) => !x.completed);
  },
};
