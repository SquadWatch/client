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
::-webkit-scrollbar {
  width: 6px;
  left: -100px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.6);
}
a {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
