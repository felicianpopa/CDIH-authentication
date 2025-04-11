import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Register } from "../index";

const formData = {
  formTitle: "Register test",
  formFields: [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "please insert your email",
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
      placeholder: "please insert a password",
      validations: {
        required: "This input is required",
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:"<>?]).{8,24}$/,
          message:
            "Please insert at least: one uppercase letter, one lowercase letter, one special character. The length must be between 8 and 24 characters",
        },
      },
      initialValue: "",
    },
    {
      name: "confirmPassword",
      label: "Confirm password",
      type: "password",
      placeholder: "confirm password",
      validations: {
        required: "This input is required",
        validate: (value, formData) =>
          value === formData.password || "The passwords do not match",
      },
      errorMessage: "The passwords do not match",
      initialValue: "",
    },
  ],
};

const Actions = () => {
  return (
    <Link to="/Register" className="d-block">
      <button variant="primary" className="mt-0 w-100">
        Sign up
      </button>
    </Link>
  );
};

export default {
  title: "Register",
  component: Register,
};

const RegisterComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleRegisterSuccess = () => {
    console.warn("function called");
    // navigate(from, { replace: true });
  };
  return (
    <Register
      registerSuccess={handleRegisterSuccess}
      apiUrl="http://localhost:8080"
      formData={formData}
    >
      <Actions />
    </Register>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<RegisterComponent />} />
      </Routes>
    </BrowserRouter>
  );
};
