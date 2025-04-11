import { createAxiosInstance } from "../../src/api/axios";
import { parseCookies, setCookie } from "nookies";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Get refresh token from cookies
    const cookies = parseCookies({ req });
    let refreshToken = "";

    if (cookies.bitUser) {
      try {
        const userData = JSON.parse(cookies.bitUser);
        refreshToken = userData.refresh_token || "";
      } catch (error) {
        console.error("Error parsing user cookie:", error);
      }
    }

    if (!refreshToken) {
      return res.status(401).json({ message: "No refresh token available" });
    }

    // Create axios instance
    const axiosInstance = createAxiosInstance(process.env.NEXT_PUBLIC_API_URL);

    // Send refresh request to the backend
    const response = await axiosInstance.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/token/refresh`,
      { refresh_token: refreshToken },
      { withCredentials: true }
    );

    // Update the cookie with the new token
    if (cookies.bitUser) {
      try {
        const userData = JSON.parse(cookies.bitUser);
        setCookie(
          { res },
          "bitUser",
          JSON.stringify({
            ...userData,
            token: response.data.token,
          }),
          {
            maxAge: 86400,
            path: "/",
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
          }
        );
      } catch (error) {
        console.error("Error updating token in cookie:", error);
      }
    }

    // Return the new token data
    return res.status(200).json(response.data);
  } catch (error) {
    console.error("Token refresh error:", error);

    // Handle different error scenarios
    if (error.response) {
      return res.status(error.response.status).json({
        message: error.response.data.message || "Failed to refresh token",
      });
    }

    return res
      .status(500)
      .json({ message: "Server error during token refresh" });
  }
}
