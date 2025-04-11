import axios from "axios";

const createAxiosInstance = (apiUrl) => {
  return axios.create({
    baseURL: apiUrl,
  });
};

const createAxiosPrivateInstance = (apiUrl) => {
  return axios.create({
    baseURL: apiUrl,

    headers: { "Content-Type": "application/json" },

    withCredentials: true,
  });
};

export { createAxiosInstance, createAxiosPrivateInstance };
