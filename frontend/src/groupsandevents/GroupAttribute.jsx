import React from "react";
import SelectorComp from "./SelectorComp";
// import styles from "./GroupAttributes.module.css";

import selectOptions from "./sortAttributes";
export default function GroupAttribute({ handleChange: handleGroupChange }) {
  return (
    <div
    // className={styles.attributes_container}
    >
      <SelectorComp
        onChange={(e) => handleGroupChange(e)}
        name="category"
        options={selectOptions.cat_array}
      />{" "}
      <SelectorComp
        onChange={(e) => handleGroupChange(e)}
        name="distance"
        options={selectOptions.dist_array}
      />
    </div>
  );
}
