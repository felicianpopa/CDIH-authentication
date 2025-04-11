import { createAxiosPrivateInstance } from "../api/axios";
import { useCookies } from "react-cookie";
import { useRefreshToken } from "./useRefreshToken";

const useAxiosPrivate = (apiUrl, refreshUrl) => {
  const [cookies, setCookie] = useCookies(["bitUser"]);
  const refresh = useRefreshToken(apiUrl, refreshUrl);
  const axiosPrivate = createAxiosPrivateInstance(apiUrl);

  axiosPrivate.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosPrivate.interceptors.response.use(
    (response) => response,
    async (error) => {
      const prevRequest = error?.config;
      if (error?.response?.status === 401 && !prevRequest?.sent) {
        prevRequest.sent = true;

        const refreshData = await refresh();

        if (refreshData?.token) {
          setCookie("bitUser", {
            ...cookies.bitUser,
            token: refreshData.token,
          });
          prevRequest.headers["Authorization"] = `Bearer ${refreshData.token}`;
        }

        return axiosPrivate(prevRequest);
      }
      return Promise.reject(error);
    }
  );

  return axiosPrivate;
};

export { useAxiosPrivate };
