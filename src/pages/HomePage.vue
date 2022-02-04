<template>
  <div class="container">
    <main class="content section m-0 p-3">
      {{ todos }}
      <h1>Minha Lista</h1>
      <AlertMessage v-show="!todos.length">
        <template #msg
          >Sem tarefas. <router-link to="/new"> Adicione</router-link> um
          item.</template
        >
      </AlertMessage>
      <ToDo v-for="(todo, index) in todos" :key="index" :todo="todo" />
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import ToDo from "@/components/ToDo.vue";
import { IToDo } from "@/Interfaces/IToDo";
import AlertMessage from "@/components/AlertMessage.vue";

export default defineComponent({
  name: "HomePage",
  components: { ToDo, AlertMessage },
  setup() {
    const store = useStore();
    const todos = computed(() => store.state.todos as IToDo[]);
    return {
      todos,
    };
  },
});
</script>

<style>
</style>