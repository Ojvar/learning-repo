import { MutationTree } from 'vuex';
import { State, TodoList, Todo } from './state';

export enum MutationType {
  SET_TODO_LIST = 'setTodoList',
  COMPLETE_ITEM = 'completeItem',
}

export type Mutations<S = State> = {
  [MutationType.SET_TODO_LIST](state: S, payload: TodoList): void;
  [MutationType.COMPLETE_ITEM](state: S, id: number): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SET_TODO_LIST](state: State, payload: TodoList): void {
    state.todoList = payload;
  },
  [MutationType.COMPLETE_ITEM](state: State, id: number): void {
    if (!state.todoList) {
      return;
    }
    const item: Todo | undefined = state.todoList.find((x) => x.id === id);
    if (item) {
      item.completed = true;
    }
  },
};
