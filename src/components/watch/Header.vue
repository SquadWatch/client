<template>
  <div class="header">
    <div class="button playlist">Hide Playlist (0)</div>
    <div class="search-area">
      <input
        class="search"
        type="text"
        v-model="search"
        placeholder="Search Videos"
      />
      <SearchPopout
        v-show="!hideSearch"
        v-if="search.trim() !== ''"
        :search="search"
        @changeSearch="search = $event"
        @hideSearch="hideSearch = true"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import SearchPopout from "./SearchPopout.vue";
export default defineComponent({
  data() {
    return {
      search: "",
      hideSearch: false,
    };
  },
  components: { SearchPopout },
  methods: {
    onGlobalClick(event: any) {
      const search = event.target.closest(".search");
      const popout = event.target.closest(".search-popout");
      this.hideSearch = !(search || popout);
    },
  },
  mounted() {
    document.addEventListener("mousedown", this.onGlobalClick);
  },
  beforeUnmount() {
    document.removeEventListener("mousedown", this.onGlobalClick);
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 50px;
  width: 100%;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}
.search-area {
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: center;
}
.search {
  background: var(--card-color);
  color: white;
  outline: none;
  border-radius: 4px;
  padding: 10px;
  border: none;
  max-width: 400px;
  width: 100%;
  border: solid 1px rgba(0, 0, 0, 0.5);
}
.button {
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: 4px;
  padding: 10px;
  position: absolute;
  left: 10px;
}
</style>
