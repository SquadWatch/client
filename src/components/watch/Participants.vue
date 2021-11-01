<template>
  <div class="participants">
    <div class="title">Participants</div>
    <div class="users">
      <div class="user" v-for="{ id } in participants" :key="id">
        <div class="username">{{ id }}</div>
        <div class="badge" v-if="id === me?.id">ME</div>
        <div class="badge" v-if="id === creatorId">👑</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getCreatorId, getMe, getParticipants } from "@/store/store";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    return {
      participants: getParticipants,
      creatorId: getCreatorId,
      me: getMe,
    };
  },
});
</script>

<style lang="scss" scoped>
.participants {
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  max-height: 50vh;
  overflow: hidden;
}

.users {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  height: 100%;
  overflow: auto;
}

.user {
  display: flex;
  border-radius: 8px;
  background: var(--card-color);
  border: solid 1px rgba(0, 0, 0, 0.5);
  padding: 5px;
  padding-left: 10px;
  align-items: center;
  height: 40px;
  flex-shrink: 0;
  .username {
    margin-right: auto;
  }
  .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.3);
    margin-left: 5px;
    height: 35px;
    flex-shrink: 0;
    width: 35px;
  }
}
</style>
