import { createAxiosInstance } from "../api";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";

const useLogout = (apiUrl, logoutUrl = null) => {
  const router = useRouter();
  const axiosInstance = createAxiosInstance(apiUrl);

  const logout = async (redirectPath = "/login") => {
    // Remove cookies
    destroyCookie(null, "bitUser", { path: "/" });
    destroyCookie(null, "bitUserData", { path: "/" });

    // Optional API call to invalidate token on server
    if (logoutUrl) {
      try {
        await axiosInstance.post(
          logoutUrl,
          {},
          {
            withCredentials: true,
          }
        );
      } catch (error) {
        console.error("Error during logout:", error);
        // Continue with client-side logout even if server request fails
      }
    }

    // Redirect to login page
    if (redirectPath) {
      router.push(redirectPath);
    }
  };

  return logout;
};

export { useLogout };
