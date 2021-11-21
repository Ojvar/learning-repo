<template>
  <q-page padding class="row items-center justify-evenly">
    <div class="column col-6">
      <h3 class="text-h3">Completed : {{ completedcount }}</h3>
    </div>
    <div class="column col-6">
      <h3 class="text-h3">Total : {{ totalCount }}</h3>
    </div>
    <div class="column col-12">
      <q-list bordered separator>
        <q-item clickable v-ripple v-for="item in todoList" :key="item.id">
          <q-item-section :class="item.completed ? 'text-strike' : ''">
            <q-item-label class="text-primary text-">
              {{ item.title }}
            </q-item-label>
            <q-item-label caption class="text-grey">
              {{ item.id }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
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
      todoList: computed(() => store.state.todo.todoList || []),
      completedcount: computed(() => store.getters.completedCount),
      totalCount: computed(() => store.getters.totalCount),
      loadTodoList,
    };
  },
});
</script>
