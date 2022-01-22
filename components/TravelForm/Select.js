import { useState } from "react";
import Input from "./Input";
import styles from "./Select.module.scss";

import { formValues } from "./Form";

const Select = (props) => {
  const [showOtherInput, setShowOtherInput] = useState(false);
  const changeHandler = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "Other") {
      setShowOtherInput(true);
      props.setInputValue({ inputFor: event.target.id, value: inputValue });
    } else {
      setShowOtherInput(false);
      props.setInputValue({ inputFor: event.target.id, value: inputValue });
    }
  };

  const updateFormInput = (data) => {
    const { inputFor, value } = data;
    formValues[inputFor] = value;
    console.log(formValues);
  };

  return (
    <div className={styles["form__select"]}>
      <div className={styles["form__select--format"]}>
        <label htmlFor={props.id}>{props.label}</label>
        <select id={props.id} onChange={changeHandler}>
          {props.options.map((el) => (
            <option defaultValue={el === "Other" && showOtherInput} key={Math.random()} value={el}>
              {el}
            </option>
          ))}
        </select>
        {showOtherInput && (
          <Input
            type="text"
            id="destination"
            placeholder="Enter Country"
            setInputValue={updateFormInput}
            onChange={changeHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Select;
