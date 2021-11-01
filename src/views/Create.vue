<template>
  <div class="create">
    <h1>Creating Room...</h1>
  </div>
</template>
<script lang="ts">
import router from "@/router";
import { setAxios } from "@/services/axios";
import { createRoom } from "@/services/rooms";
import { createUser } from "@/services/users";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  mounted() {
    const token = localStorage["token"];
    if (!token) {
      this.createUser();
      return;
    }
    this.createRoom();
  },
  methods: {
    createUser() {
      createUser().then((res) => {
        setAxios(res.data.token);
        localStorage["token"] = res.data.token;
        this.createRoom();
      });
    },
    createRoom() {
      createRoom()
        .then((res) => {
          const id = res.data.id;
          router.push("/rooms/" + id);
        })
        .catch((err) => {
          const data = err.response.data;
          if (["INVALID_TOKEN", "NO_TOKEN"].includes(data.code)) {
            this.createUser();
          }
        });
    },
  },
});
</script>
