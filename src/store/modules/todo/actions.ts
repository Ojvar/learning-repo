import { ActionContext, ActionTree } from 'vuex';
import { State as RootState } from '../../state';
import { Mutations, MutationType } from './mutations';
import { State, TodoList } from './state';

/* API */
import { loadTodo } from 'src/api';

export enum ActionType {
  LOAD_TODO_LIST = 'loadTodoList',
}

type AugmentedActionContext = Omit<
  ActionContext<State, RootState>,
  'commit'
> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionType.LOAD_TODO_LIST](context: AugmentedActionContext): void;
};

export const actions: ActionTree<State, RootState> & Actions = {
  [ActionType.LOAD_TODO_LIST]({ commit }): void {
    commit(MutationType.SET_TODO_LIST, []);

    loadTodo()
      .then((todoList) => commit(MutationType.SET_TODO_LIST, todoList))
      .catch((err) => console.error(err));
  },
};
