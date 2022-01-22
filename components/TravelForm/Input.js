import React from "react";

import styles from "./Input.module.scss";

const Input = (props) => {
  const inputChnageHandler = (event) => {
    props.setInputValue({ value: event.target.value, inputFor: event.target.id });
  };
  return (
    <div className={styles["user-input"]}>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={inputChnageHandler}
        required
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Input;
