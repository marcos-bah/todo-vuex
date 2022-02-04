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

import FormToDo from "@/components/FormToDo.vue";
export default defineComponent({
  name: "EditToDoPage",
  components: { FormToDo },
});
</script>

<style>
</style>