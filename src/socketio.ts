import { io } from "socket.io-client";
import router from "./router";
import { setAxios } from "./services/axios";
import { createUser } from "./services/users";
import { addUser, removeUser, setRoomDetails, User } from "./store/store";
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

interface RoomDetails {
  participants: User[];
  creatorId: string;
}

socket.on("ROOM_DETAILS", (roomDetails: RoomDetails) => {
  setRoomDetails(roomDetails);
});
socket.on("USER_JOIN", (payload: { userId: string }) => {
  addUser(payload.userId);
});
socket.on("USER_LEAVE", (payload: { userId: string }) => {
  removeUser(payload.userId);
});
