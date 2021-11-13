import React from "react";
import style from "./partone.module.css";
import Whatdoyouwant from "./Whatdoyouwant";
import { Link } from "react-router-dom";

const Partone = () => {
  return (
    <div>
      <div className={style.main1}>
        <div className={style.main1_1}>
          <div className={style.main1_2}>
            <div className={style.main1_3}>
              <h1 className={style.main1_3_h}>
                Dive in! There are so many things to do on Meetup
              </h1>
              <p style={{ marginTop: "32px" }}>
                Join a group to meet people, make friends, find support, grow a
                business, and explore your interests. Thousands of events are
                happening every day, both online and in person!
              </p>
            </div>
            <div className={style.main1_4}>
              <div className={style.main1_5}>
                <img
                  className={style.main1_img}
                  src="https://www.meetup.com/_next/image/?url=%2Fimages%2Fshared%2Fonline_events.svg&w=640&q=75"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.main2}>
          <div className={style.main2_1}>
            <div className={style.main2_2}>
              <div className={style.main2_3}>
                <Link to="/groupAndEvnet" style={{ textDecoration: "none" }}>
                  <div className={style.main2_4}>
                    <div className={style.main2_5}>
                      <img
                        style={{
                          objectFit: "cover",
                          height: "auto",
                          width: "auto",
                        }}
                        src="https://secure-content.meetupstatic.com/images/next/images/indexPage/category1.jpg/360x200.jpg?w=1920"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={style.main2_6}>
                    Make new friends
                    <div className={style.main2_7}>
                      <div className={style.main2_8}>
                        <img
                          style={{ height: "18px", width: "18px" }}
                          src="https://secure-content.meetupstatic.com/images/next/images/shared/right-arrow.svg?w=32"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className={style.main2_2}>
              <div className={style.main2_3}>
                <Link to="/groupAndEvnet" style={{ textDecoration: "none" }}>
                  <div className={style.main2_4}>
                    <div className={style.main2_5}>
                      <img
                        style={{
                          objectFit: "cover",
                          height: "auto",
                          width: "auto",
                        }}
                        src="https://secure-content.meetupstatic.com/images/next/images/indexPage/category2.jpg/360x200.jpg?w=1920"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={style.main2_6}>
                    Explore the outdoors
                    <div className={style.main2_7}>
                      <div className={style.main2_8}>
                        <img
                          style={{ height: "18px", width: "18px" }}
                          src="https://secure-content.meetupstatic.com/images/next/images/shared/right-arrow.svg?w=32"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className={style.main2_2}>
              <div className={style.main2_3}>
                <Link to="/groupAndEvnet" style={{ textDecoration: "none" }}>
                  <div className={style.main2_4}>
                    <div className={style.main2_5}>
                      <img
                        style={{
                          objectFit: "cover",
                          height: "auto",
                          width: "auto",
                        }}
                        src="https://secure-content.meetupstatic.com/images/next/images/indexPage/category3.jpg/360x200.jpg?w=1920"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={style.main2_6}>
                    Connect over tech
                    <div className={style.main2_7}>
                      <div className={style.main2_8}>
                        <img
                          style={{ height: "18px", width: "18px" }}
                          src="https://secure-content.meetupstatic.com/images/next/images/shared/right-arrow.svg?w=32"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.main3}>
        <div className={style.main3_1}>
          <Link to="/groupAndEvnet" className={style.main3_2}>
            Boost your career
          </Link>
          <Link to="/groupAndEvnet" className={style.main3_2}>
            Find your zen
          </Link>
          <Link to="/groupAndEvnet" className={style.main3_2}>
            Get moving
          </Link>
          <Link to="/groupAndEvnet" className={style.main3_2}>
            Share language + culture
          </Link>
          <Link to="/groupAndEvnet" className={style.main3_2}>
            Read to friends
          </Link>
          <Link to="/groupAndEvnet" className={style.main3_2}>
            Write together
          </Link>
          <Link to="/groupAndEvnet" className={style.main3_2}>
            Hone your craft
          </Link>
        </div>
      </div>
      <Whatdoyouwant />
    </div>
  );
};

export default Partone;
