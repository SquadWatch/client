<template>
  <div class="video-template">
    <img :src="item?.thumbnailURL" class="thumbnail" />
    <div class="details">
      <div class="title">{{ item?.title }}</div>
      <div class="channel-name">{{ item?.channel.name }}</div>
      <div class="views">{{ viewCount }} views • {{ item?.uploadDate }}</div>
    </div>
    <!-- <div class="buttons">
      <div class="button">Add to queue</div>
      <div class="button">Play now</div>
    </div>-->
  </div>
</template>

<script lang="ts">
import { SearchResponse } from "@/services/search";
import { computed } from "@vue/reactivity";
import { defineComponent, PropType } from "@vue/runtime-core";

export default defineComponent({
  props: {
    item: Object as PropType<SearchResponse>,
  },
  setup(props) {
    const viewCount = computed(() =>
      props.item?.viewCount.toLocaleString()
    );
    return { viewCount };
  },
});
</script>

<style lang="scss" scoped>
.video-template {
  display: flex;
  height: 100px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5px;
  cursor: pointer;
  user-select: none;
  border: solid 1px rgba(255, 255, 255, 0.1);
  &:hover {
    border: solid 1px rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.1);
  }
  position: relative;
}
.title {
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.channel-name {
  margin-top: 5px;
  font-size: 14px;
  opacity: 0.7;
  white-space: nowrap;
  overflow: hidden;
  width: 270px;
  text-overflow: ellipsis;
}
.views {
  font-size: 14px;
  opacity: 0.7;
}
.thumbnail {
  margin-right: 10px;
  aspect-ratio: 16/9;
  height: 100%;
  flex-shrink: 0;
  border-radius: 8px;
}
.buttons {
  position: absolute;
  display: flex;
  bottom: 0;
  right: 0;
  .button {
    padding: 5px;
    border-radius: 4px;
  }
}
</style>
