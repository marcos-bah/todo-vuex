<template>
  <div class="container">
    <main class="content section m-0 p-3">
      <h1>Editar Item</h1>
      <FormToDo />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import FormToDo from "@/components/FormToDo.vue";
export default defineComponent({
  name: "EditToDoPage",
  setup() {
    const store = useStore();
    const initLocalTodo = (id: number) => {
      store.commit("initLocalTodo", id);
    };
    return {
      initLocalTodo,
    };
  },
  components: { FormToDo },

  mounted() {
    const id = parseInt((this.$route.params.id || "0").toString());
    this.initLocalTodo(id);
  },
});
</script>

<style>
</style>