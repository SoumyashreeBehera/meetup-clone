import React, { useContext } from "react";
import { CommonTop } from "./CommonTop";
import styles from "./EventCreation.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContextProvider";
import { Redirect } from "react-router";

const EventC1 = () => {
  const { token } = useContext(AuthContext);
  return token !== "" ? (
    <div>
      <CommonTop />
      <div style={{ width: "100%", display: "flex" }}>
        <div
          style={{
            backgroundColor: "rgb(0, 130, 148) ",
            width: "16%",
            height: "15px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "lightgrey ",
            width: "84%",
            height: "15px",
          }}
        ></div>
      </div>
      <div className={styles.eve1} style={{ height: "65vh" }}>
        <h5 style={{ marginLeft: "280px", fontSize: "15px" }}>Step 1 of 7</h5>
        <h1>First, set your group’s location.</h1>
        <h4>
          Meetup groups meet locally, in person and online. We'll connect you
          with people in your
          <br /> area, and more can join you online.
        </h4>
        <h2>
          Bangalore , IN <span>Change Location</span>
        </h2>
      </div>
      <div className={styles.eve1_button}>
        <Link to="/start/topics">
          <button>Next</button>
        </Link>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export { EventC1 };
