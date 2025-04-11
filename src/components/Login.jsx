import React from "react";
import dynamic from "next/dynamic";
import "../style/style.scss";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { createAxiosInstance } from "../api/axios";
import { useGetUserData } from "../hooks";

const DynamicForm = dynamic(
  () => import("FE-utils").then((mod) => mod.DynamicForm),
  { ssr: false }
);

import { UserAuthMapper } from "../data/userAuthMapper";

const Login = ({
  children,
  loginSuccess,
  cookiesAge,
  apiUrl,
  loginUrl,
  getUserDataUrl,
  redirectPath = "/dashboard",
}) => {
  const router = useRouter();
  const { fetchUserDataWithAuth } = useGetUserData(apiUrl, getUserDataUrl);
  const axiosInstance = createAxiosInstance(apiUrl);

  const errRef = useRef();
  const [loginLoading, setLoginLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (formData) => {
    setLoginLoading(true);
    const { email, password } = formData;
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

      // Set cookies using nookies
      setCookie(null, "bitUser", JSON.stringify({ ...authData }), {
        path: "/",
        maxAge: cookiesAge,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });

      // Fetch user data
      const userData = await fetchUserDataWithAuth(authData.token);

      setCookie(null, "bitUserData", JSON.stringify({ ...userData }), {
        path: "/",
        maxAge: cookiesAge,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });

      // Handle successful login
      if (loginSuccess) {
        loginSuccess(authData);
      } else {
        // Use Next.js router to redirect
        const returnUrl = router.query.returnUrl || redirectPath;
        router.push(returnUrl);
      }
    } catch (err) {
      console.error("Login error:", err);
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }

      if (errRef.current) {
        errRef.current.focus();
      }
    } finally {
      setLoginLoading(false);
    }
  };

  const loginFormData = {
    formTitle: "",
    formSections: [
      {
        sectionName: "",
        formFields: [
          {
            name: "email",
            label: "Email Address",
            type: "email",
            placeholder: "Enter your email",
            validations: {
              required: "This input is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please insert a valid email",
              },
            },
            initialValue: "",
          },
          {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
            validations: {
              required: "This input is required",
            },
            initialValue: "",
          },
          {
            name: "rememberMe",
            label: "Remember me",
            type: "checkbox",
            placeholder: "",
            initialValue: "",
          },
        ],
      },
    ],
  };

  return (
    <>
      <div className="bit bit-login">
        {children}
        {errMsg && (
          <p ref={errRef} className="error-message" aria-live="assertive">
            {errMsg}
          </p>
        )}
        <DynamicForm formData={loginFormData} submitData={handleSubmit}>
          <>
            <a href="#" className="forgot-password">
              Forgot Password ?
            </a>
            {loginLoading ? (
              <button disabled className="btn btn-primary">
                Signing you in ...
              </button>
            ) : (
              <button className="btn btn-primary">Sign In</button>
            )}
          </>
        </DynamicForm>
      </div>
    </>
  );
};

export { Login };
