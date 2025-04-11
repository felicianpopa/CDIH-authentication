import { createAxiosInstance } from "../api";
import { useCookies } from "react-cookie";

const useLogout = (apiUrl) => {
  const [cookies, setCookie, removeCookie] = useCookies(["bitUser"]);
  const axiosInstance = createAxiosInstance(apiUrl);

  const logout = async () => {
    removeCookie("bitUser", { path: "/" });
    // return axiosInstance("/token/invalidate", {
    //   withCredentials: true,
    // })
    //   .then((res) => {
    //     removeCookie("bitUser",{path:'/'});
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
  };

  return logout;
};

export { useLogout };
