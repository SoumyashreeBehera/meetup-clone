import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./SignUpForm.module.css";
import Recaptcha from "react-recaptcha";
import { register } from "../../../utils/fetchData";
import { AuthContext } from "../../../Context/AuthContextProvider";
import { Redirect } from "react-router";

const SignUpEmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  // const [userData, setUserData] = useState({});

  const { setUser, setToken, user, token } = useContext(AuthContext);

  const handleFormData = async () => {
    const data = {
      username: name,
      email: email,
      password: password,
      location: location,
    };
    let userToken = await register(data);
    setUser(userToken.user);
    setToken(userToken.token);
    // setUserData(userToken);
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
            {/* <img className={Styles.signup__meetupLogo} src="https://secure.meetupstatic.com/s/img/642287997414509021596/logo/svg/logo--mSwarm--2color.svg" alt="logo" />
          <h1 className={Styles.signup_heading}>Log in</h1> */}
          </div>
          <form className={Styles.form__log}>
            <h1>Finish Signing Up</h1>
            <label className={Styles.login__label}>Your Name</label>
            <input
              className={Styles.loginform__input}
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="email"
              required
            />
            <label className={Styles.login__label}>Email Adress</label>
            <input
              className={Styles.loginform__input}
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@emil.com"
              required
            />
            <div className={Styles.login__label1}>
              Password
              <label className={Styles.label_blue}>Forgot password ? </label>
            </div>
            <input
              className={Styles.loginform__input}
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className={Styles.login__label}>Location</label>
            <input
              className={Styles.loginform__input}
              type="text"
              name="email"
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <label className={Styles.login__label}>Age</label>
            <div>
              <input
                style={{ marginTop: "10px" }}
                type="checkbox"
                name="keepSigned"
              />
              <label
                className={Styles.login__label}
                style={{ marginLeft: "15px", fontWeight: "500" }}
              >
                I am 18 years of age or old
              </label>
              <br></br>
            </div>
            <Recaptcha
              sitekey="6Le03EYaAAAAACSjTjWeb7EpgEbgMES6gs8qww6t"
              render="explicit"
            />
            <input
              className={Styles.login__login_button}
              // type="submit"
              onClick={() => handleFormData()}
              value="Sign up"
            />
            <p className={Styles.signup__para}>
              By signing up, you agree to Terms of Service,
              <br /> Privacy Policy, and Cookie Policy.{" "}
            </p>
            <Link to="/login">
              <div
                className={Styles.signup__already_member_text1}
                /* onClick={() => history.push('/login')} */
                style={{ cursor: "pointer" }}
              >
                Already a member? Log In .
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export { SignUpEmailForm };
