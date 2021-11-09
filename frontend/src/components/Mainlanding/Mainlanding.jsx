import React from "react";
import style from "./mainlanding.module.css"
import Partone from "./part1/partone";
import Parttwo from "./part2/parttwo";
import Partfour from "./part4/partfour";

const Mainlanding=()=>{
    return(
        <div className={style.back1}>
            <div className={style.prehead}>
                <div className={style.premain}>
                    <div className={style.main}>
                     <Partone/>
                     <Parttwo/>
                     <Partfour/>
                     </div>
                </div>
                
            </div>
        </div>
    )
}

export default Mainlanding