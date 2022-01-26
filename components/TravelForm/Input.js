import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";

import styles from "./Input.module.scss";

const Input = (props) => {
  const { formInfo, setFormInfo } = useContext(FormContext);

  const inputChnageHandler = (event) => {
    const inputVariable = event.target.id;
    
    setFormInfo(previousFormState => (
      {...previousFormState, [inputVariable]: event.target.value}
    ));
  };
  return (
    <div className={styles["user-input"]}>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={inputChnageHandler}
        value={formInfo[props.id]}
        required
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Input;
