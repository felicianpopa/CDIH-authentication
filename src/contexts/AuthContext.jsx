import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { createAxiosInstance } from "../api/axios";
import { UserAuthMapper } from "../data/userAuthMapper";
import { UserDataMapper } from "../data/userDataMapper";

// Create context
const AuthContext = createContext({});

export const AuthProvider = ({
  children,
  apiUrl,
  loginUrl,
  getUserDataUrl,
  refreshUrl,
  cookiesAge = 86400,
}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const axiosInstance = createAxiosInstance(apiUrl);

  // Load user from cookies on client side
  useEffect(() => {
    const initAuth = async () => {
      const cookies = parseCookies();
      if (cookies.bitUser) {
        try {
          const userData = JSON.parse(cookies.bitUser);
          setUser(userData);
        } catch (error) {
          console.error("Error parsing auth cookie:", error);
          destroyCookie(null, "bitUser", { path: "/" });
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  // Login function
  const login = async (email, password, redirectPath = "/dashboard") => {
    setLoading(true);

    try {
      const response = await axiosInstance.post(
        loginUrl,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const authData = UserAuthMapper.map(response.data);

      // Set auth cookie
      setCookie(null, "bitUser", JSON.stringify({ ...authData }), {
        path: "/",
        maxAge: cookiesAge,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });

      // Fetch user data
      const userDataResponse = await axiosInstance.get(getUserDataUrl, {
        headers: {
          Authorization: `Bearer ${authData.token}`,
        },
      });

      const userData = UserDataMapper.map(userDataResponse.data);

      setCookie(null, "bitUserData", JSON.stringify({ ...userData }), {
        path: "/",
        maxAge: cookiesAge,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });

      setUser(authData);
      setLoading(false);

      // Redirect after login
      const returnUrl = router.query.returnUrl || redirectPath;
      router.push(returnUrl);

      return authData;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Logout function
  const logout = async (redirectPath = "/login") => {
    destroyCookie(null, "bitUser", { path: "/" });
    destroyCookie(null, "bitUserData", { path: "/" });
    setUser(null);

    // Optional: Call API to invalidate token
    // try {
    //   await axiosInstance.post("/logout", {}, { withCredentials: true });
    // } catch (error) {
    //   console.error("Error during logout:", error);
    // }

    if (redirectPath) {
      router.push(redirectPath);
    }
  };

  // Refresh token
  const refreshToken = async () => {
    const cookies = parseCookies();
    if (!cookies.bitUser) {
      return null;
    }

    try {
      const userData = JSON.parse(cookies.bitUser);
      const refreshToken = userData.refresh_token;

      if (!refreshToken) {
        throw new Error("No refresh token available");
      }

      const response = await axiosInstance.post(
        refreshUrl,
        { refresh_token: refreshToken },
        { withCredentials: true }
      );

      const updatedUserData = {
        ...userData,
        token: response.data.token,
      };

      setCookie(null, "bitUser", JSON.stringify(updatedUserData), {
        path: "/",
        maxAge: cookiesAge,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });

      setUser(updatedUserData);
      return response.data;
    } catch (error) {
      console.error("Error refreshing token:", error);
      // If refresh fails, log out
      logout();
      return null;
    }
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!user;
  };

  // Provide auth context value
  const contextValue = {
    user,
    login,
    logout,
    refreshToken,
    isAuthenticated,
    loading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

// HOC to protect routes
export const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.replace({
          pathname: "/login",
          query: { returnUrl: router.asPath },
        });
      }
    }, [user, loading, router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};
