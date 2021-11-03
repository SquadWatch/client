<template>
  <div class="video-details">
    <div class="title" v-if="!video">Play A Video</div>
    <a
      :href="'https://youtube.com/watch?v=' + video?.id"
      target="_blank"
      rel="noopener noreferrer"
      ><div class="title" v-if="video">{{ video?.title }}</div></a
    >
    <div class="channel-name" v-if="video">{{ video?.channel.name }}</div>
    <div class="stats" v-if="video">
      {{ views }} views • {{ video?.uploadDate }}
    </div>
    <div class="description" v-if="video">{{ video?.description }}</div>
  </div>
</template>

<script lang="ts">
import { getNowPlaying } from "@/store/store";
import { defineComponent } from "@vue/runtime-core";
import { computed } from "@vue/reactivity";
export default defineComponent({
  setup() {
    const video = computed(() => getNowPlaying.value.video);
    const views = computed(() =>
      getNowPlaying.value.video?.viewCount.toLocaleString()
    );

    return { video, views };
  },
});
</script>

<style lang="scss" scoped>
.video-details {
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-right: 5px;
  margin-top: 0;
  background: var(--card-color);
  border-radius: 8px;
  padding: 10px;
  border: solid 1px rgba(0, 0, 0, 0.5);
  flex: 1;
  align-items: flex-start;
}
.title {
  font-size: 16px;
}
.channel-name {
  margin-top: 5px;
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
  white-space: pre-wrap;
}
</style>
