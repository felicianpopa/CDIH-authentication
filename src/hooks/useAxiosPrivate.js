import { useEffect } from "react";
import { createAxiosPrivateInstance } from "../api/axios";
import { parseCookies, setCookie } from "nookies";
import { useRefreshToken } from "./useRefreshToken";
import { useRouter } from "next/router";

const useAxiosPrivate = (apiUrl, refreshUrl) => {
  const router = useRouter();
  const refresh = useRefreshToken(apiUrl, refreshUrl);
  const axiosPrivate = createAxiosPrivateInstance(apiUrl);

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        // If no Authorization header is set, try to add it from cookies
        if (!config.headers["Authorization"]) {
          const cookies = parseCookies();
          if (cookies.bitUser) {
            try {
              const userData = JSON.parse(cookies.bitUser);
              if (userData.token) {
                config.headers["Authorization"] = `Bearer ${userData.token}`;
              }
            } catch (error) {
              console.error("Error reading token from cookie:", error);
            }
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;

          try {
            const refreshData = await refresh();

            if (refreshData?.token) {
              // Update the cookies
              const cookies = parseCookies();
              if (cookies.bitUser) {
                try {
                  const userData = JSON.parse(cookies.bitUser);
                  setCookie(
                    null,
                    "bitUser",
                    JSON.stringify({
                      ...userData,
                      token: refreshData.token,
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

              // Update the Authorization header
              prevRequest.headers[
                "Authorization"
              ] = `Bearer ${refreshData.token}`;
              return axiosPrivate(prevRequest);
            }
          } catch (error) {
            console.error("Token refresh error:", error);
            // Redirect to login if token refresh fails
            router.push("/login");
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [apiUrl, refresh, router]);

  return axiosPrivate;
};

export { useAxiosPrivate };
