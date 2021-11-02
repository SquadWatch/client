<template>
  <div class="search-popout">
    <div class="searching" v-if="isSearching">Searching...</div>
    <div class="list" v-if="!isSearching">
      <template
        v-for="item in results"
        :key="item.video?.id || item.channel.id"
      >
        <SearchChannelTemplate
          v-if="item.type === 'channel'"
          @click="channelClicked(item)"
          :item="item"
        />
        <SearchVideoTemplate
          @click="queueVideo(item)"
          v-if="item.type === 'video'"
          :item="item"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { SearchResponse, search } from "@/services/search";
import {
  defineComponent,
  onBeforeUnmount,
  watch,
  ref,
  isRuntimeOnly,
} from "@vue/runtime-core";

import SearchVideoTemplate from "./SearchVideoTemplate.vue";
import SearchChannelTemplate from "./SearchChannelTemplate.vue";
import { socket } from "@/socketio";

export default defineComponent({
  components: { SearchVideoTemplate, SearchChannelTemplate },
  props: {
    search: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    let searchTimeout: null | number = null;
    let results = ref<SearchResponse[] | null>(null);
    let isSearching = ref(false);
    let startValue = null as null | string;
    let instant = false;

    const channelClicked = (item: SearchResponse) => {
      instant = true;
      context.emit("changeSearch", "channel:" + item.channel.id);
    };

    const queueVideo = (item: SearchResponse) => {
      context.emit("hideSearch");
      socket.emit("QUEUE_VIDEO", { videoId: item.id });
    };

    const fetchSearches = () => {
      isSearching.value = true;
      search(props.search).then((res) => {
        isSearching.value = false;
        results.value = res.data;
      });
    };
    const onSearchInput = (_newVal: string, oldVal: string) => {
      if (instant) {
        instant = false;
        fetchSearches();
        return;
      }
      !startValue && (startValue = oldVal);
      if (searchTimeout) {
        clearTimeout(searchTimeout);
        searchTimeout = null;
      }
      searchTimeout = setTimeout(() => {
        if (startValue !== props.search) {
          fetchSearches();
        }
        searchTimeout = null;
        startValue = null;
      }, 1000);
    };

    onBeforeUnmount(() => {
      searchTimeout && clearTimeout(searchTimeout);
    });
    watch(() => props.search, onSearchInput);
    return { results, channelClicked, isSearching, queueVideo };
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
}

.searching {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: auto;
  padding: 10px;
}
</style>
