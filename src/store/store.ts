import { Video } from "@/services/search";
import { NowPlaying } from "@/socketio";
import { objectToString } from "@vue/shared";
import { ref, computed } from "vue";

export interface User {
  id: string;
}

export interface Room {
  participants: User[];
  creatorId: string | null;
  nowPlaying: NowPlaying
}

const state = ref({
  me: null as null | User,
  room: {
    participants: [],
    creatorId: null,
    nowPlaying: {
      skipped: 0,
      startedTimestamp: null,
      video: null,
    },
  } as Room,
});

function setRoom(payload: any): void {
  state.value.room.participants = payload.participants;
  state.value.room.creatorId = payload.creatorId;
}
function setMe(payload: User) {
  state.value.me = payload;
}

function addUser(userId: string): void {
  state.value.room.participants.push({ id: userId });
}
function removeUser(userId: string): void {
  state.value.room.participants = state.value.room.participants.filter(
    (user) => user.id !== userId
  );
}


function updateNowPlaying(update: Partial<NowPlaying>) {
  Object.assign(state.value.room.nowPlaying, update);
} 

const getParticipants = computed(() => state.value.room.participants);
const getCreatorId = computed(() => state.value.room.creatorId);
const getMe = computed(() => state.value.me);

const getNowPlaying = computed(() => state.value.room.nowPlaying)
export {
  getParticipants,
  getCreatorId,
  setRoom,
  addUser,
  removeUser,
  setMe,
  getMe,
  updateNowPlaying,
  getNowPlaying
};
