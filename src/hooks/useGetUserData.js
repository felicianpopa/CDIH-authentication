import React from "react";
import { useAxiosPrivate } from "./useAxiosPrivate";
import { UserDataMapper } from "../data/userDataMapper";

const useGetUserData = (apiUrl, getUserDataUrl) => {
  const axiosInstance = useAxiosPrivate(apiUrl, "api/token/refresh");

  const fetchUserData = async (token) => {
    try {
      const response = await axiosInstance.get(getUserDataUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return UserDataMapper.map(response.data);
    } catch (error) {
      console.error("error ", error);
    }
  };

  return fetchUserData;
};

export { useGetUserData };
