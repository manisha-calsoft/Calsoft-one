"use client";

import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { useState } from "react";
import Link from "next/link";

const validate = (values: any) => {
  const errors = {
    userEmail: "",
    userPassword: "",
  };
  if (!values.userEmail) {
    errors.userEmail = "Email is Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)
  ) {
    errors.userEmail = "Invalid email address";
  }

  if (!values.userPassword) {
    errors.userPassword = "Password is Required";
  }

  return errors;
};

const Login = () => {
  const [inputType, setInputType] = useState<string>("password");
  const showEyeIcon = inputType === "password";
  const hideEyeIcon = inputType === "text";

  const formik = useFormik({
    initialValues: {
      userEmail: "",
      userPassword: "",
    },
    validate,
    onSubmit: (values, actions) => {
      console.log("In onSubmit");
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <div className="landing-hero min-h-screen flex justify-content-center align-items-center min-w-screen">
      <form onSubmit={formik.handleSubmit}>
        <div className="border-1 surface-border surface-card border-round-sm py-6 px-4 md:px-7 z-1">
          <div className="mb-4">
            <div className="text-900 text-xl font-bold mb-2">
              Login to CalsoftOne
            </div>
            <span className="text-600 font-medium">
              Please enter your details
            </span>
          </div>
          <div className="flex flex-column w-20rem">
            <span className="p-input-icon-left w-full mb-4">
              <i className="pi pi-envelope"></i>
              <InputText
                id="userEmail"
                name="userEmail"
                className="w-full"
                placeholder="Email"
                aria-label="User Name"
                onChange={(e) => {
                  formik.setFieldValue("userEmail", e.target.value);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.userEmail}
              />
              {formik.touched.userEmail && formik.errors.userEmail ? (
                <small className="block p-error">
                  {formik.errors.userEmail}
                </small>
              ) : null}
            </span>
            <span className="p-input-icon-left w-full mb-4">
              <i className="pi pi-lock"></i>
              <InputText
                type={inputType}
                className="w-full"
                name="userPassword"
                placeholder="Password"
                aria-label="password"
                onChange={(e) => {
                  formik.setFieldValue("userPassword", e.target.value);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.userPassword}
              />
              <span className="p-input-icon-right">
                {showEyeIcon && (
                  <i
                    className="pi pi-eye"
                    onClick={() => setInputType("text")}
                  ></i>
                )}
                {hideEyeIcon && (
                  <i
                    className="pi pi-eye-slash"
                    onClick={() => setInputType("password")}
                  ></i>
                )}
              </span>
              {formik.touched.userPassword && formik.errors.userPassword ? (
                <small className="block p-error">
                  {formik.errors.userPassword}
                </small>
              ) : null}
            </span>
            <div className="mb-4 flex flex-wrap gap-3">
              <Link
                href="/forgot-password"
                className="text-600 cursor-pointer hover:text-primary ml-auto transition-colors transition-duration-300"
              >
                Forgot password?
              </Link>
            </div>
            <Button
              label="LOGIN"
              className="p-element w-full p-button p-component"
              type="submit"
            />
          </div>
        </div>
        <div className="relative bg-white mt-2">
          <div className="p-4 border-round text-gray-800 flex justify-content-center align-items-center">
            <div className="absolute border-round mb-2">
              <span className="text-600 font-medium">
                Not a Member?
                <Link
                  className="text-600 hover:text-primary cursor-pointer transition-colors transition-duration-300"
                  href="/signup"
                >
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
