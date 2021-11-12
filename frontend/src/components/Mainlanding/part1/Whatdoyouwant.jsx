import React from "react";
import style from "./whatdoyouwant.module.css"


const Whatdoyouwant=()=>{
    return(
        <div className={style.main4}>
        <div className={style.main4_1}>
          <h2 className={style.main4_1_h}>What do you want to do?</h2>
          <form >
            <div className={style.main4_1_f1}>
              <div className={style.main4_1_f1_1}>
               <img  className={style.main4_1_f1_img} src="https://secure-content.meetupstatic.com/images/next/images/search/find.svg" alt="" />
               <input className={style.main4_1_f1_inp}  type="text" placeholder="search for Tennis" />
              </div>
              <div className={style.main4_1_f1_1} style={{marginLeft:"12px"}}>
              <img className={style.main4_1_f1_img} style={{height:"16px",width:"16px"}} src="https://img.icons8.com/ios-filled/50/000000/marker.png" alt="logo"/>
               <input className={style.main4_1_f1_inp} type="text" placeholder="Location" />
              </div>
            </div>
            <div style={{width:"450px",height:"38px"}}>
                <input type="submit" className={style.main4_1_f1_4_sub}  />
            </div>
          </form>
        </div>
        <div>
            <div className={style.main5}>
                <h2 className={style.main5_1}>See what’s happening</h2>
                <div className={style.main5_2}>
                    <div className={style.main5_3}>
                        <a href="/"  className={style.main5_4}>Starting soon</a>
                        <a href="/"  className={style.main5_4}>Today</a>
                        <a href="/"  className={style.main5_4}>Tomorrow</a>
                        <a href="/"  className={style.main5_4}>This week</a>
                    </div>
                    <div className={style.main5_3}>
                    <a href="/"  className={style.main5_4}>Online</a>
                    <a href="/"  className={style.main5_4}>In person</a>
                    <a href="/"  className={style.main5_4}>Trending near you</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )

}

export default Whatdoyouwant