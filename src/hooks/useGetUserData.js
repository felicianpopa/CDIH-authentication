import { useAxiosPrivate } from "./useAxiosPrivate";
import { UserDataMapper } from "../data/userDataMapper";
import { createAxiosInstance } from "../api/axios";

const useGetUserData = (apiUrl, getUserDataUrl) => {
  const axiosPrivate = useAxiosPrivate(apiUrl, "api/token/refresh");

  // For client-side use with auth header
  const fetchUserDataWithAuth = async (token) => {
    try {
      const axiosInstance = createAxiosInstance(apiUrl);
      const response = await axiosInstance.get(getUserDataUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return UserDataMapper.map(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };

  // For authenticated requests using interceptor
  const fetchUserData = async () => {
    try {
      const response = await axiosPrivate.get(getUserDataUrl);
      return UserDataMapper.map(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };

  return { fetchUserData, fetchUserDataWithAuth };
};

export { useGetUserData };
