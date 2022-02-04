<template>
  <div class="container">
    <main class="content section m-0 p-3">
      <h1>Adicionar Item a Lista</h1>
      <FormToDo />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormToDo from "@/components/FormToDo.vue";
export default defineComponent({
  name: "AddToDoPage",
  components: { FormToDo },
});
</script>

<style>
</style>