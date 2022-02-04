<template>
  <div>
    <AlertMessage v-show="!todos.length">
      <template #msg
        >Sem tarefas. <router-link to="/new"> Adicione</router-link> um
        item.</template
      >
    </AlertMessage>
    <div
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      class="box content"
    >
      <div class="columns is-vcentered">
        <div class="column">
          <h1>{{ todo.title }}</h1>
          <p>{{ todo.description }}</p>
        </div>
        <div class="column is-narrow">
          <label class="checkbox mx-5">
            <input
              :checked="todo.isCompleted"
              @click="updateIsComplete(todo, !todo.isCompleted)"
              type="checkbox"
            />
          </label>
        </div>
        <div class="column is-narrow">
          <router-link :to="'/edit/' + todo.id" class="navbar-item"
            >Editar
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { IToDo } from "@/Interfaces/IToDo";
import AlertMessage from "./AlertMessage.vue";
export default defineComponent({
  name: "ToDo",
  setup() {
    const store = useStore();
    const todos = computed(() => store.state.todos);
    const updateTodo = (todo: IToDo) => {
      store.commit("updateTodo", todo);
    };
    return {
      updateTodo,
      todos,
    };
  },
  methods: {
    updateIsComplete(todo: IToDo, isCompleted: boolean) {
      this.updateTodo({
        ...todo,
        isCompleted,
      });
    },
  },
  components: { AlertMessage },
});
</script>

<style scoped>
input[type="checkbox"] {
  transform: scale(2);
}
</style>