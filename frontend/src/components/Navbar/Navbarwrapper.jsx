import React from "react";

import style from './Navbar.module.css';

const Navbarwrapper=()=>{
    return (
        <header className={style.header} >
            <div className={style.subhead}></div>
            <div className={style.px6}>
                <div className={style.px7}>
                    <div className={style.mainpart}>
                        <div className={style.mainpart1}>
                            <div className={style.logo}>
                                <a className={style.homepagelink} href="/">
                                    <svg className={style.image} src="'../../Assets/Meetup_logo.svg'" alt="logo" />
                                </a>
                            </div>
                            <div className={style.loginsignup}>
                                <a href="/" className={style.loginlink}>Log in</a>
                                <a href="/" className={style.loginlink}>Sign up</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbarwrapper