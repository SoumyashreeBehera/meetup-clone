import React from "react";
import styles from "./UserAccount.module.css";
import userData from "./userData";
import UserDetailSection from "./UserDetailSection";
import YourInterests from "./YourInterests";
import Facebook from "./Facebook";
import YourMeetUp from "./YourMeetUp";
export default function UserAccount() {
  const data = userData[0];
  const settings = userData[0].settings;
  const categories = userData[1].categories;
  return (
    <div className={styles.page_container}>
      <div className={styles.navbar}></div>
      <div className={styles.container}>
        <div className={styles.setting_container}>
          {settings.map((e) => (
            <p>{e}</p>
          ))}
        </div>
        <div className={styles.boxes_container}>
          <UserDetailSection data={data} />
          <YourInterests categories={categories} />
          <Facebook />
          <YourMeetUp />
        </div>
      </div>
    </div>
  );
}
