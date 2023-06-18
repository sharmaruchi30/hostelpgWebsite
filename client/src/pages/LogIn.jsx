import { React, useEffect } from "react";
import "../styles/login.css";
import "../styles/inputField/inputField1.css";
import logo from "../assets/logo.svg";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import state, { setLogin } from "../state";
import { ToastContainer } from "react-toastify";
import Notify from "../components/Notify";
import Lottie from "lottie-react";
import animationData from "../assets/106680-login-and-sign-up.json";

const initialValues = {
  email: "",
  password: "",
};

//VALIDATION SCHEMA
const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email Required"),
  password: yup.string().min(4).required("Password Required"),
});

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate("/homepage");
    }
  }, []);
  const handleFormSubmit = async (values, onSubmitProps) => {
    // try {
    //   const res = await fetch("http://localhost:3001/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     body: JSON.stringify(values),
    //   });
    //   if (res.ok) {
    //     const data = await res.json();
    //     dispatch(
    //       setLogin({
    //         token: data.token,
    //         user: data.user,
    //       })
    //     );
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        const data = await res.json();
        dispatch(
          setLogin({
            token: data.token,
            user: data.user,
          })
        );
        navigate("/homepage");
      } else if (res.status === 400) {
        console.log(res);
        console.log(res.status);
        Notify("Email does not exist.");
      } else if (res.status === 401) {
        console.log(res);
        Notify("wrong password.");
      }
    } catch (e) {
      console.log(e);
      Notify("server error. Please try again later.");
    }

    // axios
    //   .post("http://localhost:3001/auth/login", values)
    //   .then((res) => {
    //     onSubmitProps.resetForm();
    //     dispatch(
    //       setLogin({
    //         token: res.data.token,
    //         user: res.data.user,
    //       })
    //     );
    //     navigate("/homepage");
    //   })
    //   .catch((err) => {
    //     notify("wrong Email or password.");

    //     console.log(err);
    //   });
  };

  return (
    <>
      <div className="mainbg">
        <ToastContainer />
        <div className="left">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="form-section">
            <div className="welcometext">WELCOME BACK</div>
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
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
                    <span>
                      {errors.password && touched.password ? (
                        <p className="form-error">{errors.password} </p>
                      ) : (
                        <p></p>
                      )}
                      <p>
                        <a className="forgetPassword" href="">
                          Forget Password
                        </a>{" "}
                      </p>
                    </span>
                  </div>
                  <button className="loginBtn" type="submit">
                    Log In
                  </button>
                </form>
              )}
            </Formik>

            <p>
              Don't have an account? <a href="/signup">SignUp</a>
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

export default LogIn;
