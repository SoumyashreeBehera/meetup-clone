import React from 'react';
import {Link} from 'react-router-dom'
import Styles from './SignUpForm.module.css';
import Recaptcha from 'react-recaptcha';

const SignUpEmailForm = () => {
return (
  <div>
    <div className={Styles.overlay}>
    </div>
    <div className={Styles.popup}>
      <div className={Styles.Login__loginForm}>
        <div className={Styles.login__social_div1}>
          <Link to="/home"><div className={Styles.close}>&times;</div></Link>
          {/* <img className={Styles.signup__meetupLogo} src="https://secure.meetupstatic.com/s/img/642287997414509021596/logo/svg/logo--mSwarm--2color.svg" alt="logo" />
          <h1 className={Styles.signup_heading}>Log in</h1> */}
          </div>
        <form className={Styles.form__log}>
          <h1>Finish Signing Up</h1>
          <label className={Styles.login__label}>Your Name</label>
          <input className={Styles.loginform__input} type="text" name="email" required />
          <label className={Styles.login__label}>Email Adress</label>
          <input className={Styles.loginform__input} type="text" name="email" placeholder="example@emil.com" required />
          <div className={Styles.login__label1}>Password
            <label className={Styles.label_blue}  >Forgot password ? </label>
          </div>
          <input className={Styles.loginform__input} type="password" name="password"  required />
          <label className={Styles.login__label}>Location</label>
          <input className={Styles.loginform__input} type="text" name="email" value="Bangalore, In" required />
          <label className={Styles.login__label}>Age</label>
          <div>
            <input style={{marginTop:"10px"}}type="checkbox" name="keepSigned"/>
            <label className={Styles.login__label} style={{ marginLeft: "15px", fontWeight: "500" }}>I am 18 years of age or old</label><br></br>
          </div>
          <Recaptcha
            sitekey='6Le03EYaAAAAACSjTjWeb7EpgEbgMES6gs8qww6t'
            render='explicit'
          />
          <input className={Styles.login__login_button} type="submit" value="Sign up" />
          <p
            className={Styles.signup__para}
          >
            By signing up, you agree to Terms of Service,
            <br />  Privacy Policy,
             and Cookie Policy.{' '}
          </p>
          <div
            className={Styles.signup__already_member_text1}
            /* onClick={() => history.push('/login')} */
            style={{ cursor: 'pointer' }}
          >
            Already a member? Log In .
          </div>
        </form>
        
      </div>
    </div>
  </div>
)
}; 

export { SignUpEmailForm };
