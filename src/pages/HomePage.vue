<template>
  <div class="container">
    <main class="content section m-0 p-3">
      <h1>Minha Lista</h1>
      <ToDo />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ToDo from "@/components/ToDo.vue";

export default defineComponent({
  name: "HomePage",
  components: { ToDo },
});
</script>

<style>
</style>