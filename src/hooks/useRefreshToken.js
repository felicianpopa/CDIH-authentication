import { createAxiosInstance } from "../api/axios";
import { useCookies } from "react-cookie";

const useRefreshToken = (apiUrl, refreshUrl) => {
  const [cookies, setCookie] = useCookies(["bitUser"]);
  const axiosInstance = createAxiosInstance(apiUrl);

  const refresh = async () => {
    const refresh_token = cookies?.bitUser?.refresh_token || "";

    try {
      const response = await axiosInstance.post(
        `${apiUrl}/${refreshUrl}`,
        {
          refresh_token,
        },
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error;
    }
  };

  return refresh;
};

export { useRefreshToken };
