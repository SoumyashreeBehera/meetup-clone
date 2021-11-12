import React /* { useEffect } */ from 'react'
import Styles from './SignUp.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


const Signup = () => {
    return (
        <div>
            
            <div className={Styles.overlay}>
                </div>
                <div className={Styles.popup}>
                <div className={Styles.signup__social_div}>
                    <Link to="/home"><div className={Styles.close}>&times;</div></Link>
                <img className={Styles.signup__meetupLogo} src="https://secure.meetupstatic.com/s/img/642287997414509021596/logo/svg/logo--mSwarm--2color.svg" alt="logo" />
                <h1 className={Styles.signup_heading}>Sign up</h1>
                <div className={Styles.signup__already_member_text}> Already a member?
                        <Link to="/login" style={{ textDecoration: "none", color:"blue" }}><label className={Styles.label_blue} style={{ marginLeft: "5px", cursor:"pointer" }}> Login </label></Link>
                </div>
                <div className={Styles.signup__single_div}>
                    <FaFacebookF style={{ color: 'blue' }} />
                    <span className={Styles.signup__single_span}>
                        Continue with Facebook
                    </span>
                </div>
                <div className={Styles.signup__single_div}>
                    <FcGoogle />
                        <span className={Styles.signup__single_span}>
                        Continue with Google
                    </span>
                </div>
                <div className={Styles.signup__single_div}>
                    <DiApple style={{ color: "black" }} />
                    <span className={Styles.signup__single_span}>
                        Continue with Apple
                    </span>
                </div>
                <div className={Styles.signup__single_div  }>
                    <MdEmail style={{ color: "grey" }} />
                        <Link to="/signupFill" style={{ textDecoration: "none", color: "black" }}><span className={Styles.signup__single_span}>
                        Sign up with email
                        </span></Link>
                </div>
                    </div>
                    </div>
        </div>
    )
}

export { Signup }
