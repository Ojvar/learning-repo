import { GetterTree } from 'vuex';
import { State as RootState } from '../../state';
import { State, Todo } from './state';

export type Getters = {
  completedCount(state: State): number;
  totalCount(state: State): number;
};

export const getters: GetterTree<State, RootState> & Getters = {
  completedCount(state: State) {
    return state.todoList
      ? state.todoList.filter((x: Todo) => !!x.completed).length
      : 0;
  },
  totalCount(state: State) {
    return state.todoList ? state.todoList.length : 0;
  },
};
