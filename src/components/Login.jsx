import React from "react";
import "../style/style.scss";
import "FE-utils/dist/style/style.scss";
import { useRef, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { createAxiosInstance } from "../api/axios";
import { useGetUserData } from "../hooks";
import { DynamicForm } from "FE-utils";

import { UserAuthMapper } from "../data/userAuthMapper";

const Login = ({
  children,
  loginSuccess,
  cookiesAge,
  apiUrl,
  loginUrl,
  getUserDataUrl,
}) => {
  const [cookies, setCookie] = useCookies(["bitUser", "bitUserData"]);
  const fetchUserData = useGetUserData(apiUrl, getUserDataUrl);

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
      setCookie("bitUser", { ...authData }, { path: "/", maxAge: cookiesAge });
      const userData = await fetchUserData(authData.token);
      setCookie(
        "bitUserData",
        { ...userData },
        { path: "/", maxAge: cookiesAge }
      );
      if (loginSuccess) {
        loginSuccess(authData);
      }
    } catch (err) {
      console.error("error ", err);
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.response?.status === 4001) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      errRef.current.focus();
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
                message: "Please inert a valid email",
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
