import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";

const AuthGuard = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If auth state is loaded and user is not authenticated
    if (!loading && !user) {
      // Redirect to login with return URL
      router.replace({
        pathname: "/login",
        query: { returnUrl: router.asPath },
      });
    }
  }, [user, loading, router]);

  // Show loading indicator while checking auth
  if (loading) {
    return (
      <div className="auth-loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // If not authenticated, don't render children
  if (!user) {
    return null;
  }

  // If authenticated, render children
  return <>{children}</>;
};

export { AuthGuard };
