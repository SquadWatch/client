<template>
  <div class="video-details">
    <div class="title">{{ video?.title || "Play A Video" }}</div>
    <div class="channel-name">{{ video?.channel.name }}</div>
    <div class="stats">{{ views }} views • {{ video?.uploadDate }}</div>
    <div class="description">{{ video?.description }}</div>
  </div>
</template>

<script lang="ts">import { getNowPlaying } from "@/store/store";
import { defineComponent } from "@vue/runtime-core";
import { computed } from "@vue/reactivity";
export default defineComponent({
  setup() {
    const video = computed(() => getNowPlaying.value.video)
    const views = computed(() => getNowPlaying.value.video?.viewCount.toLocaleString())

    return { video, views }
  }
})
</script>

<style lang="scss" scoped>
.video-details {
  margin: 10px;
  margin-top: 0;
  background: var(--card-color);
  border-radius: 8px;
  padding: 10px;
  border: solid 1px rgba(0, 0, 0, 0.5);
}
.title {
  font-size: 16px;
  margin-bottom: 5px;
}
.channel-name {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
  opacity: 0.7;
}
.stats {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
  opacity: 0.7;
}
.description {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 5px;
}
</style>
