import "../styles/signup.css";
import "../styles/inputField/inputField1.css";
import logo from "../assets/logo2.svg";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "lottie-react";
import animationData from "../assets/106680-login-and-sign-up.json";

const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

//VALIDATION SCHEMA
const signupSchema = yup.object().shape({
  name: yup.string().min(2).max(50).required("Name Required"),
  username: yup.string().max(10).required("Username Required"),
  email: yup.string().email().required("Email Required"),
  password: yup.string().min(4).required("Password Required"),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

function SignUp() {
  const navigate = useNavigate();

  const handleFormSubmit = async (values, onSubmitProps) => {
    axios
      .post("http://localhost:3001/auth/register", values)
      .then((res) => {
        console.log(res);
        toast.success("Account created Successfully. Log In.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/regSuccessfull");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="mainbg">
        <ToastContainer />;
        <div className="left">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="form-section">
            <div className="welcometext">Create Your Account</div>
            <Formik
              initialValues={initialValues}
              validationSchema={signupSchema}
              onSubmit={handleFormSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                handleChange,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="start-align">
                    <input
                      className="authInput"
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name} </p>
                    ) : null}
                    <input
                      className="authInput"
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.username && touched.username ? (
                      <p className="form-error">{errors.username} </p>
                    ) : null}
                    <input
                      className="authInput"
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email} </p>
                    ) : null}
                    <input
                      className="authInput"
                      type="password"
                      autoComplete="off"
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password} </p>
                    ) : null}
                    <input
                      className="authInput"
                      type="tel"
                      placeholder="Phone No. (optional)"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone && touched.phone ? (
                      <p className="form-error">{errors.phone} </p>
                    ) : null}
                  </div>
                  <button className="loginBtn" type="submit">
                    Sign Up
                  </button>
                </form>
              )}
            </Formik>

            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
        <div className="right">
          <p>Where Comfort Meets Convenience:</p>
          <p>Explore Your Dream Residence Today</p>
          <Lottie animationData={animationData} loop={false} />
        </div>
      </div>
    </>
  );
}

export default SignUp;
