import { Module, Store as VuexStore } from 'vuex';
import { State as RootState } from '../../state';
import state, { State } from './state';

export const store: Module<State, RootState> = {
  namespaced: true,
  state,
};
export default store;

export type { State };
export type Store = VuexStore<Omit<State, 'getters' | 'commit' | 'dispatch'>>;

/* TODO: add getters/commit/dispatch to Store */
