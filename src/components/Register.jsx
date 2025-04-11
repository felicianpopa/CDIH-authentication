import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { createAxiosInstance } from "../api/axios";
import "FE-utils/dist/style.css";
import { DynamicForm } from "FE-utils";

const Register = ({
  children,
  registerSuccess,
  apiUrl,
  registerUrl = "/register",
  formData,
  redirectPath = "/login",
}) => {
  const router = useRouter();
  const axiosInstance = createAxiosInstance(apiUrl);
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [registering, setRegistering] = useState(false);

  const submitData = async (formData) => {
    setRegistering(true);
    try {
      const response = await axiosInstance.post(
        registerUrl,
        JSON.stringify({ ...formData }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (registerSuccess) {
        registerSuccess(response.data);
      } else {
        // Use Next.js router to redirect
        router.push(redirectPath);
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Email Already Taken");
      } else {
        setErrMsg("Registration Failed");
      }

      if (errRef.current) {
        errRef.current.focus();
      }
    } finally {
      setRegistering(false);
    }
  };

  return (
    <div className="bit bit-register">
      {errMsg && (
        <p ref={errRef} className="error-message" aria-live="assertive">
          {errMsg}
        </p>
      )}
      <DynamicForm formData={formData} submitData={submitData}>
        {registering ? (
          <button disabled className="btn btn-primary">
            Registering...
          </button>
        ) : (
          children
        )}
      </DynamicForm>
    </div>
  );
};

export { Register };
