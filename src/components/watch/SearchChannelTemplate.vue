<template>
  <div class="video-template">
    <div class="avatar-container">
      <img :src="item?.channel.avatarURL" class="avatar" />
    </div>
    <div class="details">
      <div class="title">{{ item?.channel.name }}</div>
      <div class="channel-name">{{ item?.channel.subCount }}</div>
    </div>
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
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  border: solid 1px rgba(255, 255, 255, 0.1);
  &:hover {
    border: solid 1px rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.1);
  }
}
.title {
  font-size: 16px;
}
.details {
}
.channel-name {
  margin-top: 5px;
  font-size: 14px;
  opacity: 0.7;
}
.views {
  font-size: 14px;
  opacity: 0.7;
}
.avatar {
  margin-right: 10px;
  height: 100%;
  width: 100px;
  flex-shrink: 0;
  border-radius: 50%;
}
.avatar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-shrink: 0;
  aspect-ratio: 16/9;
}
</style>
