<template>
  <NavBar />
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomePage from "./pages/HomePage.vue";
import NavBar from "./components/NavBar.vue";

@Options({
  components: {
    HomePage,
    NavBar,
  },
})
export default class App extends Vue {}
</script>

<style>
</style>
