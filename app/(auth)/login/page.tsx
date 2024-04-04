"use client";

import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

// https://www.youtube.com/watch?v=khGypss-RJs
const Login = () => {
  const [inputType, setInputType] = useState<string>("password");
  const router = useRouter();
  const showEyeIcon = inputType === "password";
  const hideEyeIcon = inputType === "text";

  const formik = useFormik({
    initialValues: {
      userEmail: "",
      userPassword: "",
    },
    validationSchema: Yup.object({
      userEmail: Yup.string()
        .required("Email is Required")
        .email("Invalid email address"),
      userPassword: Yup.string().required("Password is Required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      console.log("onSubmit", values);
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
      const { userEmail, userPassword } = values;

      signIn("credentials", {
        email: userEmail,
        password: userPassword,
        redirect: false,
      });
      // const response = await fetch(`api/auth/login`, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     email: userEmail,
      //     password: userPassword,
      //   }),
      // });

      // console.log({ response });
      // postData("https://hyemwex4ti.us-east-1.awsapprunner.com/user/loginUser", {
      //   email: userEmail,
      //   password: userPassword,
      // }).then((data) => {
      //   sessionStorage.setItem("accessToken", data.token);
      //   sessionStorage.setItem("username", data.username);
      //   sessionStorage.setItem("userEmail", data.email);
      //   router.push("/home/dashboard");
      //   console.log(data); // JSON data parsed by `data.json()` call

      //   const expirationTime = 1000;
      //   localStorage.set("token", data.token);
      //   setTimeout(() => {
      //     localStorage.removeItem("token");
      //   }, expirationTime);
      // });
    },
  });

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }

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
                value={formik.values.userEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full"
                placeholder="Email"
                aria-label="User Name"
              />
              {formik.errors.userEmail && formik.touched.userEmail ? (
                <small className="block p-error pt-2">
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
                value={formik.values.userPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Password"
                aria-label="password"
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
              {formik.errors.userPassword && formik.touched.userPassword ? (
                <small className="block p-error pt-2">
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
