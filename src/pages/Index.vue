<template>
  <q-page class="row items-center justify-evenly">
    <div class="column col-12">
      <h1>Completed</h1>
      <pre>{{ completedTodoList }}</pre>
    </div>
    <div class="column col-12">
      <h1>UnCompleted</h1>
      <pre>{{ uncompletedTodoList }}</pre>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'src/store';
import { ActionType } from 'src/store/modules/todo';

export default defineComponent({
  name: 'PageIndex',

  beforeMount() {
    this.loadTodoList();
  },

  setup() {
    const store = useStore();

    function loadTodoList() {
      store.dispatch(ActionType.LOAD_TODO_LIST);
    }

    return {
      loadTodoList,
      completedTodoList: computed(() => store.getters.completedTodoList),
      uncompletedTodoList: computed(() => store.getters.uncompletedTodoList),
    };
  },
});
</script>
