import { Store as VuexStore } from 'vuex';
import { Todo } from './modules';

export type Store = Todo.Store;
export type State = {
  todo: Todo.State;
};
export const modules = {
  todo: Todo.store,
};

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<State>;
  }
}
