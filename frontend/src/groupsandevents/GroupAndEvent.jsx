import React, { useState, useEffect } from "react";
import Group from "./Group";
import Events from "./Events";

import EventAttribute from "./EventAttribute";
import GroupAttribute from "./GroupAttribute";


import styles from "./GroupAndEvent.module.css";
export default function GroupAndEvent() {
  const [show, setShow] = useState("Events");
  const [eventAttributes, setEventAttributes] = useState({});
  const [groupAttributes, setGroupAttributes] = useState({});
  const handleEventChange = (event) => {
    const { name, value } = event.target;
    setEventAttributes({ ...eventAttributes, [name]: value });
  };
  const handleGroupChange = (event) => {
    const { name, value } = event.target;
    setGroupAttributes({ ...groupAttributes, [name]: value });
  };

  const toggleEtoG = () => {
    if (show === "Groups") {
      setShow("Events");
    }
  };
  const toggleGtoE = () => {
    if (show === "Events") {
      setShow("Groups");
    }
  };

  return (
    <div className={styles.groundandevents_container}>
      <div className={styles.button_container}>
        <button onClick={toggleEtoG}>Events</button>
        <button onClick={toggleGtoE}>Groups</button>
      </div>
      <div className={styles.sorts_container}>
        {show === "Events" && (
          <EventAttribute
            handleChange={handleEventChange}
            eventAttributes={eventAttributes}
          />
        )}
        {show === "Groups" && (
          <GroupAttribute
            handleChange={handleGroupChange}
            groupAttributes={groupAttributes}
          />
        )}
      </div>
      {show === "Groups" && <Group groupAttributes={groupAttributes} />}
      {show === "Events" && <Events eventAttributes={eventAttributes} />}
    </div>
  );
}
