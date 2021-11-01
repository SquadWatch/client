import axios from "axios";

let axiosInstance = axios.create({
  baseURL: "http://localhost:80/api/",
});

export const getAxios = () => {
  return axiosInstance;
};
export const setAxios = (token: string) => {
  axiosInstance = axios.create({
    baseURL: "http://localhost:80/api/",
    headers: {
      authorization: token,
    },
  });
};
