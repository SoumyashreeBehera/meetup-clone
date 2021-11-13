import React, { useContext } from "react";
import { CommonTop } from "./CommonTop";
import styles from "./EventCreation.module.css";
import { AuthContext } from "../../../Context/AuthContextProvider";
import { Link } from "react-router-dom";

const EventC3 = () => {
  const { createEventData, setCreateEventData } = useContext(AuthContext);
  console.log(createEventData);
  return (
    <div>
      <CommonTop />
      <div style={{ width: "100%", display: "flex" }}>
        <div
          style={{
            backgroundColor: "rgb(0, 130, 148) ",
            width: "36%",
            height: "15px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "lightgrey ",
            width: "64%",
            height: "15px",
          }}
        ></div>
      </div>
      <div className={styles.eve1}>
        <h5 style={{ marginLeft: "280px", fontSize: "15px" }}>Step 3 of 7</h5>
        <h1>What will your group’s name be?</h1>
        <h4>
          Choose a name that will give people a clear idea of what the group is
          about. Feel free to get
          <br />
          creative! You can edit this later if you change your mind.
        </h4>
        <h1>
          <input
            style={{
              width: "67%",
              height: "50px",
              textAlign: "center",
              fontSize: "20px",
            }}
            onChange={(e) =>
              setCreateEventData({ ...createEventData, title: e.target.value })
            }
            placeholder="Enter Group Name"
          />
        </h1>
      </div>
      <div className={styles.eve3_button}>
        <Link to="/start/topics">
          <button className={styles.eve3_back}>Back</button>
        </Link>
        <Link to="/start/description">
          <button className={styles.eve2_next}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export { EventC3 };
