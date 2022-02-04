<template>
  <nav class="container navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <div class="title">rep2unifei</div>
      </router-link>
      <a
        :class="{ 'is-active': toggleBtn }"
        @click="toggle"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': toggleBtn }"
    >
      <div class="navbar-start">
        <router-link to="/" class="navbar-item"> Principal </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <router-link to="/new" class="button is-primary">
            <strong>Adicionar Item</strong>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  data() {
    return {
      toggleBtn: false,
    };
  },
  methods: {
    toggle() {
      this.toggleBtn = !this.toggleBtn;
    },
  },
});
</script>

<style></style>