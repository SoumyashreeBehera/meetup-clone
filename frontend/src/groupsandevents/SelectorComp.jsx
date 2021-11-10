import React from "react";

import styles from "./SelectorComp.module.css";
export default function SelectorComp({ options, handleChange, formData }) {
  return (
    <select className={styles.select}>
      {options.map((e) => (
        <option>{e}</option>
      ))}
    </select>
  );
}
