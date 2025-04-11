import React from "react";
import Head from "next/head";
import { Register } from "../src/components/Register";
import { useRouter } from "next/router";

const formData = {
  formTitle: "Create Account",
  formFields: [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      validations: {
        required: "This input is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Please enter a valid email",
        },
      },
      initialValue: "",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Create a password",
      validations: {
        required: "This input is required",
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:"<>?]).{8,24}$/,
          message:
            "Password must contain at least: one uppercase letter, one lowercase letter, one special character. Length must be between 8 and 24 characters",
        },
      },
      initialValue: "",
    },
    {
      name: "confirmPassword",
      label: "Confirm password",
      type: "password",
      placeholder: "Confirm your password",
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

const RegisterActions = () => {
  return <button className="btn btn-primary w-100">Create Account</button>;
};

export default function RegisterPage() {
  const router = useRouter();

  const handleRegisterSuccess = (data) => {
    // Redirect to login page after successful registration
    router.push("/login");
  };

  return (
    <>
      <Head>
        <title>Register | Your App</title>
        <meta name="description" content="Create a new account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="register-page">
        <div className="register-header">
          <h1>Create Account</h1>
          <p>Fill in the form below to create your account</p>
        </div>

        <Register
          registerSuccess={handleRegisterSuccess}
          apiUrl={process.env.NEXT_PUBLIC_API_URL}
          registerUrl="/api/register"
          formData={formData}
          redirectPath="/login"
        >
          <RegisterActions />
        </Register>
      </main>
    </>
  );
}
