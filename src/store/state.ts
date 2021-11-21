import { Store as VuexStore } from 'vuex';
import { Todo } from './modules';

export type State = {
  todo: Todo.State;
};
export const modules = {
  todo: Todo.store,
};
export type Store = Todo.Store<Pick<State, 'todo'>>;

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<State>;
  }
}
