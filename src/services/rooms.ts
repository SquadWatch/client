import { AxiosResponse } from "axios";
import { getAxios } from "./axios";

interface CreateRoomResponse {
  id: string;
}

export const createRoom = (): Promise<
  AxiosResponse<CreateRoomResponse, any>
> => {
  return getAxios().post("/rooms");
};
