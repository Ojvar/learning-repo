import { ActionContext, ActionTree } from 'vuex';
import { State as RootState } from '../../state';
import { Mutations, MutationType } from './mutations';
import { State, TodoList } from './state';

export enum ActionType {
  LOAD_TODO_LIST = 'loadTodoList',
}

type AugmentedActionContext = Omit<ActionContext<State, RootState>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export interface Actions {
  [ActionType.LOAD_TODO_LIST](context: AugmentedActionContext): void;
};

export const actions: ActionTree<State, RootState> & Actions = {
  [ActionType.LOAD_TODO_LIST]({ commit }): void {
    const todoList: TodoList = [{ id: 1, completed: false, title: 'Todo #1' }];
    commit(MutationType.SET_TODO_LIST, todoList);
  },
};
