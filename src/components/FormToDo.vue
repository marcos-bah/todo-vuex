<template>
  <form @submit.prevent="submitTodo">
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
        <button type="submit" class="button is-link">
          {{ isEdit ? "Atualizar" : "Adicionar" }}
        </button>
      </div>
      <div class="control" v-show="isEdit">
        <button
          type="reset"
          @click="apagarTodo"
          class="button is-danger is-light"
        >
          Deletar
        </button>
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
import { computed, onMounted, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "FormToDo",

  setup() {
    const store = useStore();
    const route = useRoute();

    const initLocalTodo = (id: string) => {
      store.commit("initLocalTodo", id);
    };

    onMounted(() => {
      const id = route.params.id as string;
      if (id) {
        initLocalTodo(id);
      }
    });

    const localTodo = computed(() => store.state.localTodo as IToDo);
    const setLocalTodoId = (id: string) => store.commit("setLocalTodoId", id);
    const setLocalTodoTitle = (title: string) =>
      store.commit("setLocalTodoTitle", title);
    const setLocalTodoDescription = (description: string) =>
      store.commit("setLocalTodoDescription", description);
    const clearLocalTodo = () => store.commit("clearLocalTodo");
    const idExist = (id: string): boolean =>
      store.state.todos.find((todo: { id: string }) => todo.id === id);
    const removeTodoById = (id: string) => store.commit("removeTodoById", id);
    const updateTodo = () => {
      store.commit("updateTodo", localTodo.value);
      store.commit("clearLocalTodo");
    };
    const addTodo = () => {
      store.commit("addTodo", localTodo.value);
      store.commit("clearLocalTodo");
    };

    return {
      localTodo,
      setLocalTodoId,
      setLocalTodoTitle,
      setLocalTodoDescription,
      clearLocalTodo,
      idExist,
      removeTodoById,
      updateTodo,
      addTodo,
      initLocalTodo,
    };
  },
  methods: {
    submitTodo() {
      if (this.localTodo === null) return false;
      if (this.isEdit) {
        this.updateTodo();
      } else {
        this.addTodo();
      }
      this.$router.push("/");
    },
    resetLocalTodo() {
      this.clearLocalTodo();
      this.$router.back();
    },
    apagarTodo() {
      this.removeTodoById(this.localTodo.id);
      this.clearLocalTodo();
      this.$router.back();
    },
  },
  computed: {
    isEdit(): boolean {
      return this.idExist(this.localTodo.id);
    },
  },
  mounted() {
    if (this.localTodo.id === "0") {
      this.setLocalTodoId(new Date().getTime().toString());
    }
  },
  unmounted() {
    this.clearLocalTodo();
  },
});
</script>

<style>
</style>