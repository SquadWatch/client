<template>
  <div class="youtube">
    <YouTube
      ref="youtube"
      :src="videoId"
      :style="{ height: '100%' }"
      @ready="onReady"
      :width="'100%'"
      :height="'100%'"
      @stateChange="onStateChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import YouTube from "vue3-youtube";
export default defineComponent({
  components: { YouTube },
  props: {
    videoId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      ready: false,
      playing: false,
      buffering: false,
    };
  },
  methods: {
    onReady() {
      this.$refs.youtube.playVideo();
    },
    onStateChange(event: { data: number }) {
      const state = event.data;
      if (state === 3) {
        this.buffering = true;
      }
      if (state === 2) {
        this.playing = false;
      }
      if (state === 1) {
        this.playing = true;
        if (this.ready === false) {
          this.$refs.youtube.pauseVideo();
          this.ready = true;
        }
      }
    },
  },
});
</script>

<style scoped lang="scss">
.youtube {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
</style>
