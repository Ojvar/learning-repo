<template>
  <q-page class="row items-center justify-evenly">
    <div class="column col-6">
      <h3 class="text-h3">Completed</h3>
      <pre>{{ completedcount }}</pre>
    </div>
    <div class="column col-6">
      <h3 class="text-h3">UnCompleted</h3>
      <pre>{{ totalCount }}</pre>
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

    console.log(store.getters);

    return {
      completedcount: computed(() => store.getters.completedCount),
      totalCount: computed(() => store.getters.totalCount),
      loadTodoList,
    };
  },
});
</script>
