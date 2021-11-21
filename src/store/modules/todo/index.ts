import {
  CommitOptions,
  DispatchOptions,
  Module,
  Store as VuexStore,
} from 'vuex';
import { State as RootState } from '../../state';
import { state, State } from './state';
import { mutations, Mutations } from './mutations';
import { getters, Getters } from './getters';
import { actions, Actions } from './actions';

export const store: Module<State, RootState> = {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export { ActionType } from './actions';
export { MutationType } from './mutations';
export type { State };
export type Store<S = State> = Omit<
  VuexStore<S>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};
