import React, { useContext, useEffect } from "react";
import { FormContext } from "../../context/FormContext";

import styles from "./Input.module.scss";

const Input = (props) => {
  // getting variables and functions form the FormContext to manipulate the state
  const { formInfo, setFormInfo, setError } = useContext(FormContext);

  const inputChangeHandler = (event) => {
    const inputVariable = event.target.id;
    const inputValue = event.target.value;

    // setting the error if the form is invalid
    if (inputValue.trim().length === 0) {
      setError(true);
    } else {
      setError(false);
    }

    // updating the form state by updating the previous state
    setFormInfo((previousFormState) => ({
      ...previousFormState,
      [inputVariable]: inputValue,
    }));
  };

  return (
    <div className={styles["user-input"]}>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={inputChangeHandler}
        value={formInfo[props.id]}
        required
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Input;
