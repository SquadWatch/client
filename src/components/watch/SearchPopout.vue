<template>
  <div class="search-popout">
    <div class="tabs">
      <div class="tab selected">Videos</div>
      <div class="tab">Channels</div>
    </div>
    <div class="search-area">
      <div v-if="!results">Searching...</div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeUnmount,
  watch,
  ref,
} from "@vue/runtime-core";

export default defineComponent({
  props: {
    search: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    let searchTimeout: null | number = null;
    let results = ref(null);

    const fetchSearches = () => {
      console.log("fetch");
    };
    onBeforeUnmount(() => {
      searchTimeout && clearTimeout(searchTimeout);
    });
    const onSearchInput = () => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
        searchTimeout = null;
      }
      searchTimeout = setTimeout(() => {
        fetchSearches();
      }, 1000);
    };
    watch(() => props.search, onSearchInput);
    return { results };
  },
});
</script>

<style lang="scss" scoped>
.search-popout {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.15);
  border: solid 1px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
  backdrop-filter: blur(10px);
  width: 500px;
  height: 500px;
  border-radius: 8px;
  padding: 10px;
}

.tabs {
  display: flex;
  gap: 10px;
  .tab {
    display: flex;
    padding-bottom: 8px;
    border-bottom: solid 5px transparent;
    cursor: pointer;
    user-select: none;
    position: relative;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.6);
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      height: 5px;
      width: 20px;
      border-radius: 10px;
      background: transparent;
    }
    &:hover {
      &:before {
        background: rgba(255, 255, 255, 0.3);
      }
    }
    &.selected {
      color: white;
      &:before {
        background: white;
      }
    }
  }
}
.search-area {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
