import React, { useState, useContext } from "react";
import Styles from "./LoginForm.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { Link } from "react-router-dom";
import { login } from "../../../utils/fetchData";
import { AuthContext } from "../../../Context/AuthContextProvider";
import { Redirect } from "react-router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, setToken, token } = useContext(AuthContext);

  const handleFormData = async () => {
    const data = {
      email: email,
      password: password,
    };
    let userToken = await login(data);
    // console.log(userToken);
    setUser(userToken.user);
    setToken(userToken.token);
  };
  return token === "" ? (
    <div>
      <div className={Styles.overlay}></div>
      <div className={Styles.popup}>
        <div className={Styles.Login__loginForm}>
          <div className={Styles.login__social_div1}>
            <Link to="/">
              <div className={Styles.close}>&times;</div>
            </Link>
            <img
              className={Styles.signup__meetupLogo}
              src="https://secure.meetupstatic.com/s/img/642287997414509021596/logo/svg/logo--mSwarm--2color.svg"
              alt="logo"
            />
            <h1 className={Styles.signup_heading}>Log in</h1>
            <div className={Styles.signup__already_member_text}>
              {" "}
              Not a member yet?
              <Link to="/signup">
                <label
                  className={Styles.label_blue}
                  style={{ marginLeft: "5px" }}
                >
                  {" "}
                  Sign up{" "}
                </label>
              </Link>
            </div>
          </div>
          <form className={Styles.form__log}>
            <label className={Styles.login__label}>Email</label>
            <input
              className={Styles.loginform__input}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
            />
            <div className={Styles.login__label1}>
              Password
              <label className={Styles.label_blue}>Forgot password ? </label>
            </div>
            <input
              className={Styles.loginform__input}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
            />
            <input type="checkbox" name="keepSigned" />
            <label
              className={Styles.login__label}
              style={{ marginLeft: "15px", fontWeight: "500" }}
            >
              Keep me signed in
            </label>
            <br></br>
            <input
              className={Styles.login__login_button}
              onClick={() => handleFormData()}
              //   type="submit"
              value="Log In"
            />
            <div className={Styles.login_underline}></div>
            <div className={Styles.login__social_div}>
              <div className={Styles.login__single_div}>
                <FaFacebookF style={{ color: "blue" }} />
                <span className={Styles.login__single_span}>
                  Continue with Facebook
                </span>
              </div>
              <div className={Styles.login__single_div}>
                <FcGoogle />
                <span className={Styles.login__single_span}>
                  Continue with Google
                </span>
              </div>
              <div className={Styles.login__single_div}>
                <DiApple style={{ color: "black" }} />
                <span className={Styles.login__single_span}>
                  Continue with Apple
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export { LoginForm };
