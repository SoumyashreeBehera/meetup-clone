import React from "react";
import style from "./partone.module.css"

const Partone = () => {
  return (
    <div >
      <div className={style.main1}>
        <div className={style.main1_1}>
         <div className={style.main1_2}>
           <div className={style.main1_3}>
             <h1 className={style.main1_3_h}>Dive in! There are so many things to do on Meetup</h1>
             <p style={{marginTop:"32px"}}>Join a group to meet people, make friends, find support, grow a business, and explore your interests. Thousands of events are happening every day, both online and in person!</p>
           </div>
           <div className={style.main1_4}>
             <div className={style.main1_5}>
               <img  className={style.main1_img} src="https://www.meetup.com/_next/image/?url=%2Fimages%2Fshared%2Fonline_events.svg&w=640&q=75" alt="" />

             </div>
           </div>
         </div>
        </div>
        <div  className={style.main2}>
          <div className={style.main2_1}>
             <div className={style.main2_2}>
               <div className={style.main2_3}>
                 <a href="/" style={{textDecoration:"none"}}>
                   <div className={style.main2_4}>
                     <div className={style.main2_5}>
                       <img style={{objectFit:"cover",height:"auto",width:"auto"}} src="https://secure-content.meetupstatic.com/images/next/images/indexPage/category1.jpg/360x200.jpg?w=1920" alt="" />
                     </div>
                   </div>
                   <div className={style.main2_6}>
                   Make new friends
                   <div className={style.main2_7}>
                     <div  className={style.main2_8}>
                       <img style={{height:"18px",width:"18px"}} src="https://secure-content.meetupstatic.com/images/next/images/shared/right-arrow.svg?w=32" alt="" />
                     </div>
                   </div>
                   </div>
                 </a>
               </div>
             </div>
             <div className={style.main2_2}>
             <div className={style.main2_3}>
                 <a href="/" style={{textDecoration:"none"}}>
                   <div className={style.main2_4}>
                     <div className={style.main2_5}>
                       <img style={{objectFit:"cover",height:"auto",width:"auto"}} src="https://secure-content.meetupstatic.com/images/next/images/indexPage/category2.jpg/360x200.jpg?w=1920" alt="" />
                     </div>
                   </div>
                   <div className={style.main2_6}>
                   Explore the outdoors
                   <div className={style.main2_7}>
                     <div  className={style.main2_8}>
                       <img style={{height:"18px",width:"18px"}} src="https://secure-content.meetupstatic.com/images/next/images/shared/right-arrow.svg?w=32" alt="" />
                     </div>
                   </div>
                   </div>
                 </a>
               </div>
             </div>
             <div className={style.main2_2}>
             <div className={style.main2_3}>
                 <a href="/" style={{textDecoration:"none"}}>
                   <div className={style.main2_4}>
                     <div className={style.main2_5}>
                       <img style={{objectFit:"cover",height:"auto",width:"auto"}} src="https://secure-content.meetupstatic.com/images/next/images/indexPage/category3.jpg/360x200.jpg?w=1920" alt="" />
                     </div>
                   </div>
                   <div className={style.main2_6}>
                   Connect over tech
                   <div className={style.main2_7}>
                     <div  className={style.main2_8}>
                       <img style={{height:"18px",width:"18px"}} src="https://secure-content.meetupstatic.com/images/next/images/shared/right-arrow.svg?w=32" alt="" />
                     </div>
                   </div>
                   </div>
                 </a>
               </div>
             </div>
          </div>
        </div>
      </div >
      <div  className={style.main3}>
        <div className={style.main3_1}>
          <a href="/" className={style.main3_2}>Boost your career</a>
          <a href="/" className={style.main3_2}>Find your zen</a>
          <a href="/" className={style.main3_2}>Get moving</a>
          <a href="/" className={style.main3_2}>Share language + culture</a>
          <a href="/" className={style.main3_2}>Read with friends</a>
          <a href="/" className={style.main3_2}>Write together</a>
          <a href="/" className={style.main3_2}>Hone your craft</a>
        </div>
      </div>
      <div className={style.main4}>
        <div className={style.main4_1}>
          <h2 className={style.main4_1_h}></h2>
          <form >
            <div className={style.main4_1_f1}>
              <div className={style.main4_1_f1_1}>
               
              </div>
              <div></div>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default Partone;
