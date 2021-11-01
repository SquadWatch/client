<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { setAxios } from "./services/axios";

export default defineComponent({
  mounted() {
    const token = localStorage["token"];
    if (token) {
      setAxios(token);
    }
  },
});
</script>
<style lang="scss">
html,
body,
#app {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--background-color);
  color: white;
}
</style>
