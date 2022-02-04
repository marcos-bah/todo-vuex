<template>
  <form @submit.prevent="$emit('add')">
    <div class="field">
      <label class="label">Titulo</label>
      <div class="control">
        <input
          :value="localTodo.title"
          @input="setLocalTodoTitle($event.target.value)"
          class="input"
          type="text"
          required
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Descrição</label>
      <div class="control">
        <textarea
          :value="localTodo.description"
          @input="setLocalTodoDescription($event.target.value)"
          class="textarea"
          required
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button type="submit" class="button is-link">Enviar</button>
      </div>
      <div class="control">
        <button
          type="reset"
          @click="resetLocalTodo"
          class="button is-link is-light"
        >
          Cancelar
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { IToDo } from "@/Interfaces/IToDo";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "FormToDo",
  emits: ["add"],
  setup() {
    const store = useStore();
    const localTodo = computed(() => store.state.localTodo as IToDo);
    const setLocalTodoId = (id: number) => store.commit("setLocalTodoId", id);
    const setLocalTodoTitle = (title: string) =>
      store.commit("setLocalTodoTitle", title);
    const setLocalTodoDescription = (description: string) =>
      store.commit("setLocalTodoDescription", description);
    const clearLocalTodo = () => store.commit("clearLocalTodo");
    return {
      localTodo,
      setLocalTodoId,
      setLocalTodoTitle,
      setLocalTodoDescription,
      clearLocalTodo,
    };
  },
  methods: {
    resetLocalTodo() {
      this.clearLocalTodo();
      this.$router.back();
    },
  },
  mounted() {
    if (this.localTodo.id === 0) {
      this.setLocalTodoId(new Date().getTime());
    }
  },
  unmounted() {
    this.clearLocalTodo();
  },
});
</script>

<style>
</style>