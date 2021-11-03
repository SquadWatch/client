<template>
  <div class="video-player" :style="{ maxHeight, marginLeft }">
    <YouTube v-if="videoId" :videoId="videoId" />
  </div>
</template>

<script lang="ts">
import { getNowPlaying } from "@/store/store";
import { defineComponent } from "@vue/runtime-core";
import YouTube from "./YouTube.vue";
import _ from "lodash";
export default defineComponent({
  components: { YouTube },
  data() {
    return {
      maxHeight: "initial",
      marginLeft: "10px",
    };
  },
  methods: {
    onRezise() {
      this.maxHeight = this.calculateMaxHeight();
      this.marginLeft = this.calculateMargin();
    },
    onResizeEnd: _.debounce(function (this: any) {
      this.maxHeight = this.calculateMaxHeight();
      this.marginLeft = "10px";
      setTimeout(() => {
        this.marginLeft = this.calculateMargin();
      }, 100);
    }, 500),
    calculateMaxHeight() {
      return window.innerHeight - 135 + "px";
    },
    calculateMargin() {
      const main = document.getElementById("main-area");
      const mainWidth = main?.clientWidth as number;
      const playerWidth = this.$el.clientWidth;
      return mainWidth / 2 - playerWidth / 2 + "px";
    },
  },
  mounted() {
    this.maxHeight = this.calculateMaxHeight();
    setTimeout(() => {
      this.marginLeft = this.calculateMargin();
    }, 100);

    window.addEventListener("resize", this.onRezise);
    window.addEventListener("resize", this.onResizeEnd);
  },
  computed: {
    videoId() {
      return getNowPlaying.value.video?.id;
    },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onRezise);
    window.removeEventListener("resize", this.onResizeEnd);
  },
});
</script>

<style lang="scss" scoped>
.video-player {
  aspect-ratio: 16/9;
  margin: 10px;
  margin-right: 5px;
  flex-shrink: 0;
  margin-top: 0;
  background: var(--card-color);
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
</style>
