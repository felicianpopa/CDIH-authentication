import React from "react";
import Head from "next/head";
import { Login } from "../src/components/Login";
import { useRouter } from "next/router";

const LoginHeader = () => {
  return (
    <div className="login-header">
      <h1>Welcome Back</h1>
      <p>Please sign in to continue</p>
    </div>
  );
};

export default function LoginPage() {
  const router = useRouter();
  const { returnUrl } = router.query;

  const handleLoginSuccess = (data) => {
    // Redirect to the return URL or dashboard
    router.push(returnUrl || "/dashboard");
  };

  return (
    <>
      <Head>
        <title>Login | Your App</title>
        <meta name="description" content="Login to access your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="login-page">
        <Login
          loginSuccess={handleLoginSuccess}
          cookiesAge={86400}
          apiUrl={process.env.NEXT_PUBLIC_API_URL}
          loginUrl="/api/auth"
          getUserDataUrl="/api/me"
          redirectPath="/dashboard"
        >
          <LoginHeader />
        </Login>
      </main>
    </>
  );
}
