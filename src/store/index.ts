import { store } from 'quasar/wrappers';
import { InjectionKey } from 'vue';
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
  createLogger,
} from 'vuex';

import { Store, State, modules } from './state';

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<State>> = Symbol('vuex-key');

export default store(function (/* { ssrContext } */) {
  const Store = createStore<State>({
    plugins: process.env.DEBUGGING ? [createLogger()] : [],
    modules,

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});

export function useStore(): Store {
  return vuexUseStore(storeKey) as Store;
}
