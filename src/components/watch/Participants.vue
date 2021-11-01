<template>
  <div class="participants">
    <div class="title">Participants</div>
    <div class="user" v-for="{ id } in participants" :key="id">
      <div class="username">{{ id }}</div>
      <div class="other">{{ id === creatorId ? "👑" : "" }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { getCreatorId, getParticipants } from "@/store/store";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    return { participants: getParticipants, creatorId: getCreatorId };
  },
});
</script>

<style lang="scss">
.participants {
  height: 100%;
  flex: 1;
  margin: 10px;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  background: var(--card-color);
  border-radius: 8px;
  padding: 10px;
  border: solid 1px rgba(0, 0, 0, 0.5);
}
.user {
  display: flex;
  opacity: 0.7;
  margin: 10px;
  align-items: center;
  justify-content: center;
  .other {
    margin-left: auto;
  }
}
</style>
