import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useAuth } from "../src/contexts/AuthContext";
import { useAxiosPrivate } from "../src/hooks/useAxiosPrivate";
import { AuthGuard } from "../src/components/AuthGuard";
import { GetAuth } from "../src/hooks/getAuth";

function DashboardPage() {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const axiosPrivate = useAxiosPrivate(
    process.env.NEXT_PUBLIC_API_URL,
    "api/token/refresh"
  );

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUserData = async () => {
      try {
        const response = await axiosPrivate.get("/api/me", {
          signal: controller.signal,
        });

        if (isMounted) {
          setUserData(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [axiosPrivate]);

  return (
    <>
      <Head>
        <title>Dashboard | Your App</title>
        <meta name="description" content="User dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dashboard">
        <h1>Welcome to the Dashboard</h1>

        {user && (
          <div className="user-info">
            <h2>User Information</h2>
            <p>User ID: {user.user_id}</p>
            <p>Roles: {user.user_roles?.join(", ")}</p>
          </div>
        )}

        {userData && (
          <div className="additional-data">
            <h2>Additional Data</h2>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
          </div>
        )}

        <button className="btn btn-outline-danger" onClick={() => logout()}>
          Logout
        </button>
      </main>
    </>
  );
}

// Wrap the page with the AuthGuard component
DashboardPage.getLayout = (page) => <AuthGuard>{page}</AuthGuard>;

// You can also use getServerSideProps for server-side authentication
export async function getServerSideProps(context) {
  const user = GetAuth(context);

  // If not authenticated, redirect to login
  if (!user) {
    return {
      redirect: {
        destination: "/login?returnUrl=/dashboard",
        permanent: false,
      },
    };
  }

  // If authenticated, pass user data as props
  return {
    props: {
      serverUser: user,
    },
  };
}

export default DashboardPage;
