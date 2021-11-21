<template>
  <q-page class="row items-center justify-evenly">
    <h1>Completed</h1>
    <pre>{{ completedTodoList }}</pre>
    <h1>UnCompleted</h1>
    <pre>{{ uncompletedTodoList }}</pre>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'src/store';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const store = useStore();

    return {
      completedTodoList: computed(() => store.getters.completedTodoList),
      uncompletedTodoList: computed(() => store.getters.uncompletedTodoList),
    };
  },
});
</script>
