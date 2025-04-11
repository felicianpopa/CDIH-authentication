import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Login } from "../index";
import "./stories.css";

const LoginHeader = () => {
  return <>Login header</>;
};

export default {
  title: "Login",
  component: Login,
};

const LoginComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLoginSuccess = async (data) => {
    navigate(from, { replace: true });
  };
  return (
    <Login
      loginSuccess={handleLoginSuccess}
      cookiesAge={86400}
      apiUrl="http://localhost:8080"
      loginUrl="/api/auth"
      getUserDataUrl="/api/me"
    >
      <LoginHeader />
    </Login>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginComponent />} />
      </Routes>
    </BrowserRouter>
  );
};
