import React from "react";

import style from "./upcomingevents.module.css"
import SliderWrapper from "../../SliderWrapper/SliderWrapper";

const UpcomingCards=({img,sub1,sub2,sub3})=>(
    <div className={style.card}>
           <div className={style.card1}>
               <a href="/" className={style.card2} >
                   <div className={style.card3}>
                       <div className={style.card4}>
                           <img className={style.card_img} src={img} alt="" />
                           <div className={style.card4_2} >
                               <div className={style.card4_3}>
                               <svg data-swarm-icon="true" width="18" height="18" xmlns="http://www.w3.org/2000/svg" class="mr-1 text-gray6 fill-current"><path d="M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z"></path></svg>
                               </div>
                           </div>
                       </div>
                       <div className={style.card5}>
                           <div className={style.card6}>
                               <div className={style.card7}>{sub1}</div>
                               <p  className={style.card8}>{sub2}</p>
                               <div className={style.card9}>
                                   <p className={style.card10}>
                                       <span  className={style.card11}>{sub3}</span>
                                   </p>
                               </div>
                           </div>
                           <div></div>
                       </div>
                   </div>
               </a>
           </div>
        </div>

)


const Upcomingevents=()=>{
    const upcomingevent=[
        {
        img:'https://secure-content.meetupstatic.com/images/classic-events/499586066/265x149.jpg',
        sub1:'Tue, Nov 16 @ 9:30 PM IST',
        sub2:'deploy by DigitalOcean',
        sub3:'DigitalOcean NYC'
    },
    {
        img:'https://secure-content.meetupstatic.com/images/classic-events/499651119/265x149.jpg',
        sub1:'Fri, Nov 19 @ 6:30 AM IST',
        sub2:'Intro To Data Science: Linear Regression Models Workshop',
        sub3:'NYC Learning Community | Flatiron School'
    },
    {
        img:'https://secure-content.meetupstatic.com/images/classic-events/499876063/265x149.jpg',
        sub1:'Wed, Nov 17 @ 4:00 AM IST',
        sub2:'Towards Governing the Metaverse - Blockchain and Human Models',
        sub3:'VerseTech NYC Metaverse | AI | Blockchain | XR VR AR'
    },
    {
        img:'https://secure-content.meetupstatic.com/images/classic-events/499586066/265x149.jpg',
        sub1:'Tue, Nov 16 @ 9:30 PM IST',
        sub2:'deploy by DigitalOcean',
        sub3:'DigitalOcean NYC'
    },
    {
        img:'https://secure-content.meetupstatic.com/images/classic-events/499876063/265x149.jpg',
        sub1:'Wed, Nov 17 @ 4:00 AM IST',
        sub2:'Towards Governing the Metaverse - Blockchain and Human Models',
        sub3:'VerseTech NYC Metaverse | AI | Blockchain | XR VR AR'
    },
    {
        img:'https://secure-content.meetupstatic.com/images/classic-events/499586066/265x149.jpg',
        sub1:'Tue, Nov 16 @ 9:30 PM IST',
        sub2:'deploy by DigitalOcean',
        sub3:'DigitalOcean NYC'
    },
    {
        img:'https://secure-content.meetupstatic.com/images/classic-events/499586066/265x149.jpg',
        sub1:'Tue, Nov 16 @ 9:30 PM IST',
        sub2:'deploy by DigitalOcean',
        sub3:'DigitalOcean NYC'
    },
]

    const arr=upcomingevent.map((el)=><UpcomingCards {...el}/>)
    
    return(
        <div style={{maxWidth:"1120px",margin:"auto"}}>
        <div className={style.head1}>
            <h2 className={style.head2}>Upcoming online events</h2>
            <div className={style.head3}><span className={style.head4}>Explore more groups</span>
            Explore more groups</div>
        </div>
             <SliderWrapper arr={arr} limit={4}  />
     </div>
        
    )
}

export default Upcomingevents