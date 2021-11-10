import React from "react";
import data from "./eventData";
import styles from "./Event.module.css";
export default function Events() {
  return (
    <div className={styles.data_container}>
      {data.map((e) => (
        <div>
          <img src={e.eventImage}></img>

          <div className={styles.info_container}>
            <p>{e.dateAndTime}</p>

            <span>{e.title}</span>
            <p>{e.eventLocationType}</p>
            <span>{e.attendees.length} attendees</span>
          </div>
        </div>
      ))}
    </div>
  );
}
