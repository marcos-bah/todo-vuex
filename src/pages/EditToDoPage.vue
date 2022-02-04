<template>
  <div class="container">
    <main class="content section m-0 p-3">
      {{ localTodo }}
      <h1>Editar Item</h1>
      <FormToDo @add="submitTodo()" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import FormToDo from "@/components/FormToDo.vue";
import { IToDo } from "@/Interfaces/IToDo";
export default defineComponent({
  name: "EditToDoPage",
  setup() {
    const store = useStore();
    const localTodo = computed(() => store.state.localTodo as IToDo);
    const updateTodo = () => {
      store.commit("updateTodo", localTodo.value);
      store.commit("clearLocalTodo");
    };
    const initLocalTodo = (id: number) => {
      store.commit("initLocalTodo", id);
    };
    return {
      localTodo,
      updateTodo,
      initLocalTodo,
    };
  },
  components: { FormToDo },
  methods: {
    submitTodo() {
      this.updateTodo();
      this.$router.push("/");
    },
  },
  mounted() {
    const id = parseInt((this.$route.params.id || "0").toString());
    this.initLocalTodo(id);
  },
});
</script>

<style>
</style>