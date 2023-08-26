import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import LoginInput from "../inputs/loginInput";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import DotLoader from "react-spinners/DotLoader";
import axios from "axios";
import cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const loginInfos = {
  email: "",
  password: "",
};
function LoginForm({ setVisible }) {
  const [login, setLogin] = useState(loginInfos);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password } = login;

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const LoginValidation = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email")
      .max(100, "Email must be less than 100 characters"),

    password: Yup.string().required("Password is required"),
  });

  const loginSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          email,
          password,
        }
      );

      dispatch({ type: "LOGIN", payload: data });
      cookies.set("user", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="login_wrap">
      <div className="login_1">
        <img src="../../icons/facebook.svg" alt="" />
        <span>
          Facebook helps you connect and share with the peopele in your life
        </span>
      </div>
      <div className="login_2">
        <div className="login_2_wrap">
          <Formik
            enableReinitialize
            initialValues={{ email, password }}
            validationSchema={LoginValidation}
            onSubmit={() => loginSubmit()}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  placeholder="Email address or Phone Number"
                  onChange={handleLoginChange}
                />
                <LoginInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleLoginChange}
                  bottom="true"
                />
                <button className="blue_btn " type="submit">
                  Log in
                </button>
              </Form>
            )}
          </Formik>
          <Link to="/forget" className="forgot_password">
            Forgot Password?
          </Link>
          {error && <div className="error_text">{error}</div>}
          <div className="sign_splitter"></div>
          <button
            className="blue_btn open_signup"
            onClick={() => setVisible(true)}
          >
            Create New Account
          </button>
        </div>
        <Link to="/" className="sign_extra">
          <b>Create a Page</b> for a celebrity, brands or business
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
