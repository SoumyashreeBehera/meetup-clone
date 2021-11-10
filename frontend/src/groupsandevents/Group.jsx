import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "./eventData";
import styles from "./Group.module.css";
export default function Group({ groupAttributes }) {
  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "mongodb+srv://soumya:SBZZiPCbV4kArLwC@cluster0.7lhmb.mongodb.net/meetUpClone?retryWrites=true&w=majority/product"
      )
      .then((res) => {
        setGroupData(res.data);
      });
  }, []);
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
