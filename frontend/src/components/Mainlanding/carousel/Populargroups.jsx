import React from "react";

import style from "./populargroups.module.css"
import SliderWrapper from "../../SliderWrapper/SliderWrapper";
import Category from "../../category/Category";


const PopularCard =({img,head1,sub1,sub2})=>(
    <div className={style.card1}>
    <div  className={style.card1_1} >
        <a href="/" className={style.card1_2}>
            <div className={style.card1_3}>
                <img className={style.card1_img} src={img} alt="alt" />
            </div>
            <h3 className={style.card1_h}>{head1}</h3>
        </a>
        <a href="/" className={style.card1_4}>
            <div className={style.card1_5}>{sub1}</div>
            <p className={style.card1_6}>{sub2}</p>
        </a>
    </div>
    </div>

);


const Populargroup=()=>{
    
    const populargroups=[
        {
            img:'https://secure-content.meetupstatic.com/images/classic-events/499449271/70x70.jpg?w=256',
            head1:'Manhattan Professional Networking Meetup Group',
            sub1:'Wed, Nov 17 @ 5:30 AM IST',
            sub2:'NYC Networking Happy Hour Mixer 7-9PM'
        },
        {
            img:'https://secure-content.meetupstatic.com/images/classic-events/499824685/70x70.jpg?w=256',
            head1:'New York Energy Healing and Meditation',
            sub1:'Fri, Nov 12 @ 12:30 AM IST',
            sub2:'Peace workshop '
        },
        {
            img:'https://secure-content.meetupstatic.com/images/classic-events/500132135/70x70.jpg?w=256',
            head1:'Shorewalkers: Members Only Group',
            sub1:'Wed, Nov 17 @ 5:30 AM IST',
            sub2:'Three Lakes, Three Parks in Queens'
        
    },
    {
        img:'https://secure-content.meetupstatic.com/images/classic-events/499449271/70x70.jpg?w=256',
        head1:'Manhattan Professional Networking Meetup Group',
        sub1:'Wed, Nov 17 @ 5:30 AM IST',
        sub2:'NYC Networking Happy Hour Mixer 7-9PM'
    },
    {
        img:'https://secure-content.meetupstatic.com/images/classic-events/499824685/70x70.jpg?w=256',
        head1:'New York Energy Healing and Meditation',
        sub1:'Fri, Nov 12 @ 12:30 AM IST',
        sub2:'Peace workshop'
    },
    {
        img:'https://secure-content.meetupstatic.com/images/classic-events/499449271/70x70.jpg?w=256',
        head1:'Manhattan Professional Networking Meetup Group',
        sub1:'Wed, Nov 17 @ 5:30 AM IST',
        sub2:'NYC Networking Happy Hour Mixer 7-9PM'
    },
    

    ]

    const arr=populargroups.map((el)=><PopularCard {...el}/>)
       
   return(
   <div style={{maxWidth:"1120px",margin:"auto"}}>
       <div className={style.head1}>
           <h2 className={style.head2}>Popular Groups</h2>
           <div className={style.head3}><span className={style.head4}>Explore more groups</span>
           Explore more groups</div>
       </div>
			<SliderWrapper arr={arr} limit={3}  />
	</div>
   
   )
}

export default Populargroup
