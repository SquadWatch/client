import { io } from "socket.io-client";
import router from "./router";
import { setAxios } from "./services/axios";
import { Video } from "./services/search";
import { createUser } from "./services/users";
import { addUser, removeUser, Room, setMe, setRoom, updateNowPlaying, User } from "./store/store";
export const socket = io("localhost:80", {
  autoConnect: false,
  transports: ["websocket"],
});

socket.on("connect_error", (err) => {
  if (["NO_TOKEN", "INVALID_TOKEN"].includes(err.message)) {
    socket.disconnect();
    createUser().then((res) => {
      setAxios(res.data.token);
      localStorage["token"] = res.data.token;
      socket.auth = {
        token: localStorage["token"],
        roomId: router.currentRoute.value.params.id,
      };
      socket.connect();
    });
  }
});


socket.on("DETAILS", (details: { room: Room; me: User }) => {
  setRoom(details.room);
  setMe(details.me);
});
socket.on("USER_JOIN", (payload: { userId: string }) => {
  addUser(payload.userId);
});
socket.on("USER_LEAVE", (payload: { userId: string }) => {
  removeUser(payload.userId);
});

export interface NowPlaying {
  skipped: number;
  startedTimestamp: null | number;
  video: Video | null;
}

socket.on("PREPARE_PLAY_VIDEO", (payload: NowPlaying) => {
  updateNowPlaying(payload);
})