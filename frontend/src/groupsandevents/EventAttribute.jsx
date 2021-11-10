import React from "react";
import SelectorComp from "./SelectorComp";

import attributes from "./sortAttributes.js";
// import styles from "./GroupAttributes.module.css";
export default function EventAttribute({ handleChange: handleEventChange }) {
  return (
    <div
    // className={styles.attributes_container}
    >
      <SelectorComp
        onChange={(e) => handleEventChange(e)}
        name="day"
        options={attributes.day_array}
      />
      <SelectorComp
        onChange={(e) => handleEventChange(e)}
        name="type"
        options={attributes.type_array}
      />
      <SelectorComp
        onChange={(e) => handleEventChange(e)}
        name="distance"
        options={attributes.dist_array}
      />
      <SelectorComp
        onChange={(e) => handleEventChange(e)}
        name="category"
        options={attributes.cat_array}
      />

      <SelectorComp
        onChange={(e) => handleEventChange(e)}
        name="sort"
        options={attributes.sort_by}
      />
    </div>
  );
}
