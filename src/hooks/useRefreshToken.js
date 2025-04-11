import { createAxiosInstance } from "../api/axios";
import { parseCookies, setCookie } from "nookies";

const useRefreshToken = (apiUrl, refreshUrl) => {
  const refresh = async (ctx = null) => {
    const cookies = parseCookies(ctx);
    let refresh_token = "";

    if (cookies.bitUser) {
      try {
        const userData = JSON.parse(cookies.bitUser);
        refresh_token = userData.refresh_token || "";
      } catch (error) {
        console.error("Error parsing user cookie:", error);
      }
    }

    if (!refresh_token) {
      throw new Error("No refresh token available");
    }

    const axiosInstance = createAxiosInstance(apiUrl);

    try {
      const response = await axiosInstance.post(
        refreshUrl,
        {
          refresh_token,
        },
        {
          withCredentials: true,
        }
      );

      // Update cookies - works on client-side
      if (typeof window !== "undefined" && cookies.bitUser) {
        try {
          const userData = JSON.parse(cookies.bitUser);
          setCookie(
            null,
            "bitUser",
            JSON.stringify({
              ...userData,
              token: response.data.token,
            }),
            {
              maxAge: 86400,
              path: "/",
            }
          );
        } catch (error) {
          console.error("Error updating token in cookie:", error);
        }
      }

      return response.data;
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error;
    }
  };

  return refresh;
};

export { useRefreshToken };
