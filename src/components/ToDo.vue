<template>
  <div class="box content">
    <div class="columns is-vcentered">
      <div class="column">
        <h1>{{ todo.title }}</h1>
        <p>{{ todo.description }}</p>
      </div>
      <div class="column is-narrow">
        <label class="checkbox mx-5">
          <input
            :checked="todo.isCompleted"
            @click="updateIsComplete(!todo.isCompleted)"
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
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { IToDo } from "@/Interfaces/IToDo";
export default defineComponent({
  name: "ToDo",
  setup() {
    const store = useStore();
    const updateTodo = (todo: IToDo) => {
      store.commit("updateTodo", todo);
    };
    return {
      updateTodo,
    };
  },
  props: {
    todo: {
      type: Object as () => IToDo,
      required: true,
    },
  },
  methods: {
    updateIsComplete(isCompleted: boolean) {
      this.updateTodo({
        ...this.todo,
        isCompleted,
      });
    },
  },
});
</script>

<style scoped>
input[type="checkbox"] {
  transform: scale(2);
}
</style>