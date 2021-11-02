import { AxiosResponse } from "axios";
import { getAxios } from "./axios";

export interface SearchResponse {
  type: "video" | "channel";
  video?: {
    id: string;
    title: string;
    thumbnailURL: string;
    viewCount: number;
    uploadDate: string;
  };
  channel: {
    id: string;
    name: string;
    avatarURL: string;
    subCount?: string;
  };
}

export const search = (
  value: string
): Promise<AxiosResponse<SearchResponse[], any>> => {
  return getAxios().get("/search/" + value);
};
