<template>
  <div class="container">
    <main class="content section m-0 p-3">
      {{ localTodo }}
      <h1>Adicionar Item a Lista</h1>
      <FormToDo @add="submitTodo()" />
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import FormToDo from "@/components/FormToDo.vue";
import { IToDo } from "@/Interfaces/IToDo";
export default defineComponent({
  name: "AddToDoPage",
  components: { FormToDo },
  setup() {
    const store = useStore();
    const localTodo = computed(() => store.state.localTodo as IToDo);
    const addTodo = () => {
      store.commit("addTodo", localTodo.value);
      store.commit("clearLocalTodo");
    };

    return {
      localTodo,
      addTodo,
    };
  },
  methods: {
    submitTodo() {
      this.addTodo();
      this.$router.push("/");
    },
  },
});
</script>

<style>
</style>