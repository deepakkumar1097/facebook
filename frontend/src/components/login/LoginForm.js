import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import LoginInput from "../inputs/loginInput";
import { Link } from "react-router-dom";
const loginInfos = {
  email: "",
  password: "",
};
function LoginForm() {
  const [login, setLogin] = useState(loginInfos);

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
          <div className="sign_splitter"></div>
          <button className="blue_btn open_signup">Create New Account</button>
        </div>
        <Link to="/" className="sign_extra">
          <b>Create a Page</b> for a celebrity, brands or business
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
