import { useContext } from "react";

import styles from "./Select.module.scss";

import { FormContext } from "../../context/FormContext";

const Select = (props) => {
  const { formInfo, setFormInfo } = useContext(FormContext);

  const changeHandler = (event) => {
    const inputVariable = event.target.id;

    setFormInfo((previousFormState) => ({
      ...previousFormState,
      [inputVariable]: event.target.value,
    }));
  };

  return (
    <div className={styles["form__select"]}>
      <div className={styles["form__select--format"]}>
        <label htmlFor={props.id}>{props.label}</label>
        <select
          id={props.id}
          onChange={changeHandler}
          defaultValue={formInfo[props.id]}
        >
          {props.options.map((el, i) => (
            <option key={el + i} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
