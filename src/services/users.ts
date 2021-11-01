import { AxiosResponse } from "axios";
import { getAxios } from "./axios";

interface CreateUserResponse {
  token: string;
}

export const createUser = (): Promise<
  AxiosResponse<CreateUserResponse, any>
> => {
  return getAxios().post("/users");
};
