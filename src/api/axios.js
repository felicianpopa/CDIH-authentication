import axios from "axios";
import { parseCookies } from "nookies";

const createAxiosInstance = (apiUrl) => {
  return axios.create({
    baseURL: apiUrl,
  });
};

const createAxiosPrivateInstance = (apiUrl, ctx = null) => {
  const instance = axios.create({
    baseURL: apiUrl,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });

  // When called server-side with context
  if (ctx) {
    const cookies = parseCookies(ctx);
    if (cookies.bitUser) {
      try {
        const userData = JSON.parse(cookies.bitUser);
        if (userData.token) {
          instance.defaults.headers.Authorization = `Bearer ${userData.token}`;
        }
      } catch (error) {
        console.error("Error parsing cookie:", error);
      }
    }
  }

  return instance;
};

export { createAxiosInstance, createAxiosPrivateInstance };
