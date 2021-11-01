import { ref, computed } from "vue";

export interface User {
  id: string;
}

interface RoomDetails {
  participants: User[];
  creatorId: string;
}

const state = ref({ participants: [] as User[], creatorId: "" });

function setRoomDetails(payload: RoomDetails): void {
  state.value.participants = payload.participants;
  state.value.creatorId = payload.creatorId;
}

function addUser(userId: string): void {
  state.value.participants.push({ id: userId });
}
function removeUser(userId: string): void {
  state.value.participants = state.value.participants.filter(
    (user) => user.id !== userId
  );
}

const getParticipants = computed(() => state.value.participants);
const getCreatorId = computed(() => state.value.creatorId);

export { getParticipants, getCreatorId, setRoomDetails, addUser, removeUser };
