import axios, { AxiosRequestConfig } from "axios";

type AxiosConfigParams = {
  endpoint: string;
} & AxiosRequestConfig;

export const AxiosService = async (config: AxiosConfigParams) =>
  await axios({
    url: `/api/${config.endpoint}`,
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  });
