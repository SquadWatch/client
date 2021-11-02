import { AxiosResponse } from "axios";
import { getAxios } from "./axios";

export interface SearchResponse extends Video {
  type: "video" | "channel";
  channel: Channel;
} 

export interface Channel {
  id: string;
  name: string;
  avatarURL: string;
  subCount?: string;
};
export interface Video {
  id: string;
  title: string;
  thumbnailURL: string;
  viewCount: number;
  uploadDate: string;
  description?: string;
  channel: Channel
}

export const search = (
  value: string
): Promise<AxiosResponse<SearchResponse[], any>> => {
  return getAxios().get("/search/" + value);
};
