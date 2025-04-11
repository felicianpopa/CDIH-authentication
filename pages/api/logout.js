import { destroyCookie, parseCookies } from "nookies";
import { createAxiosInstance } from "../../src/api/axios";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Get token from cookies for API invalidation (optional)
  const cookies = parseCookies({ req });
  let token = "";

  if (cookies.bitUser) {
    try {
      const userData = JSON.parse(cookies.bitUser);
      token = userData.token || "";
    } catch (error) {
      console.error("Error parsing user cookie:", error);
    }
  }

  // Clear cookies
  destroyCookie({ res }, "bitUser", { path: "/" });
  destroyCookie({ res }, "bitUserData", { path: "/" });

  // Optional: Invalidate token on the backend
  if (token && process.env.NEXT_PUBLIC_INVALIDATE_TOKEN_URL) {
    try {
      const axiosInstance = createAxiosInstance(
        process.env.NEXT_PUBLIC_API_URL
      );
      await axiosInstance.post(
        process.env.NEXT_PUBLIC_INVALIDATE_TOKEN_URL,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      // Continue with client-side logout even if server request fails
      console.error("Error invalidating token on server:", error);
    }
  }

  // Return success response
  return res.status(200).json({ message: "Logged out successfully" });
}
