import { Store as VuexStore } from 'vuex';
import { TodoState, todoStore } from './modules';

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<State>;
  }
}

export type Store = Omit<VuexStore<State>, 'getters' | 'commit' | 'dispatch'>;
// & {
//   commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
//     key: K,
//     payload: P,
//     options?: CommitOptions
//   ): ReturnType<Mutations[K]>
// } & {
//   dispatch<K extends keyof Actions>(
//     key: K,
//     payload?: Parameters<Actions[K]>[1],
//     options?: DispatchOptions
//   ): ReturnType<Actions[K]>
// } & {
//   getters: {
//     [K in keyof Getters]: ReturnType<Getters[K]>
//   }
// }

export type State = {
  todo: TodoState;
};

export const modules = {
  todo: todoStore,
};
