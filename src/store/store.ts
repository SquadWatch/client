import { ref, computed } from "vue";

export interface User {
  id: string;
}

interface Room {
  participants: User[];
  creatorId: string | null;
}

const state = ref({
  me: null as null | User,
  room: {
    participants: [],
    creatorId: null,
  } as Room,
});

function setRoom(payload: Room): void {
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

const getParticipants = computed(() => state.value.room.participants);
const getCreatorId = computed(() => state.value.room.creatorId);
const getMe = computed(() => state.value.me);

export {
  getParticipants,
  getCreatorId,
  setRoom,
  addUser,
  removeUser,
  setMe,
  getMe,
};
