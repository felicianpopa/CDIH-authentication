import React from "react";
import { createAxiosInstance } from "../api/axios";
import "FE-utils/dist/style.css";
import { DynamicForm } from "FE-utils";

const REGISTER_URL = "/register";

const Register = ({ children, registerSuccess, apiUrl, formData }) => {
  const axiosInstance = createAxiosInstance(apiUrl);

  const submitData = async (formData) => {
    try {
      const response = await axiosInstance.post(
        REGISTER_URL,
        JSON.stringify({ ...formData }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (registerSuccess) {
        registerSuccess();
      }
    } catch (err) {
      if (!err?.response) {
        console.warn("No Server Response");
      } else if (err.response?.status === 409) {
        console.warn("Email Taken");
      } else {
        console.warn("Registration Failed");
      }
    }
  };

  return (
    <DynamicForm formData={formData} submitData={submitData}>
      {children}
    </DynamicForm>
  );
};

export { Register };
