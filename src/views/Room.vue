<template>
  <div class="watch">
    <Header />
    <div class="container">
      <Playlist />
      <div class="main">
        <VideoPlayer />
        <VideoDetails />
      </div>
      <div class="left-area">
        <Participants />
        <Chat />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Header from "@/components/watch/Header.vue";
import VideoPlayer from "@/components/watch/VideoPlayer.vue";
import VideoDetails from "@/components/watch/VideoDetails.vue";
import Participants from "@/components/watch/Participants.vue";
import Chat from "@/components/watch/Chat.vue";
import Playlist from "@/components/watch/Playlist.vue";
import { socket } from "@/socketio";

export default defineComponent({
  components: {
    Header,
    VideoPlayer,
    VideoDetails,
    Participants,
    Chat,
    Playlist,
  },
  mounted() {
    socket.auth = {
      token: localStorage["token"],
      roomId: this.$route.params.id,
    };
    if (!socket.connected) socket.connect();
  },
});
</script>

<style lang="scss" scoped>
.watch {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
.container {
  display: flex;
  width: 100%;
  height: 100%;
}
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.left-area {
  display: flex;
  flex-direction: column;
}
</style>
