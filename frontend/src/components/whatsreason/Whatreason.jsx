import React from "react";
import style from "./whatreason.module.css"


const Whatreason=()=>{
    return(
    <div className={style.main}>
        <div className={style.main_1}>
            <div className={style.main_2}>
                <section className={style.main_3}>
                   <h1 className={style.main_4}>
                       <span>What's your main reason for joining Meetup?</span>
                   </h1>
                   <p className={style.main_5}>
                       <span>This will help us make good recommendations for you.</span>
                   </p>
                   <div className={style.main_6}>
                       <button className={style.main_7}>
                           <span className={style.main_8}>Develop a skill</span>
                       </button>
                       <button className={style.main_7}>
                           <span className={style.main_8}>Develop a skill</span>
                       </button>
                       <button className={style.main_7}>
                           <span className={style.main_8}>Develop a skill</span>
                       </button>
                       <button className={style.main_7}>
                           <span className={style.main_8}>Develop a skill</span>
                       </button>
                       <button className={style.main_7}>
                           <span className={style.main_8}>Develop a skill</span>
                       </button>
                       <button className={style.main_7}>
                           <span className={style.main_8}>Develop a skill</span>
                       </button>
                   </div>
                </section>
            </div>
        </div>
    </div>)

}

export default Whatreason;