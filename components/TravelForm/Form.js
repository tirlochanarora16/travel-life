import { useContext, useEffect, useState } from "react";
import styles from "./Form.module.scss";
import Input from "./Input";
import Select from "./Select";
import { FormContext } from "../../context/FormContext";
import { countries } from "../../utils/countriesList";
import useMediaQuery from "../../hooks/useMedia";

const Form = (props) => {
  const { currentFormPage, incrementFormPage, decrementFormPage } =
    useContext(FormContext);

  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // console.log(width);

  return (
    <div
      className={styles["travel__form"]}
      style={{
        marginTop: props.forHeader && (width > 400) ? "-15rem" : "-8rem",
        position: props.forHeader ? "relative" : "",
        zIndex: props.forHeader ? "200" : "",
        backgroundColor: props.forHeader ? "#f2f2f2" : "",
      }}
    >
      <form>
        <div className={styles["travel__form--row"]}>
          {currentFormPage === 0 && (
            <Input
              type="text"
              id="name"
              placeholder="Enter Full Name"
              label="Name"
            />
          )}
          {currentFormPage === 1 && (
            <Input
              type="email"
              id="email"
              placeholder="Enter Email"
              label="E-mail"
            />
          )}
          {currentFormPage === 2 && (
            <Input
              type="number"
              id="mobile"
              placeholder="Enter Mobile"
              label="Phone"
            />
          )}
          {currentFormPage === 3 && (
            <Input
              type="number"
              id="budget"
              placeholder="Enter Budget (in USD)"
              label="Budget"
            />
          )}
        </div>
        <div className={styles["travel__form--row"]}>
          {currentFormPage === 4 && (
            <Select
              id="destination"
              label="Destination: "
              options={countries}
            />
          )}
          {currentFormPage === 5 && (
            <Select
              id="reason"
              label="Reason: "
              options={["Leisure & Tourism", "Work", "Honey Moon"]}
            />
          )}
          {currentFormPage === 6 && (
            <Select
              id="excrusion"
              label="Excrusions: "
              options={[
                "Snowmobile",
                "Horse Riding",
                "Tree Climbing",
                "Adventure",
                "Beach",
                "Cruising",
                "Island",
                "JetSki",
                "Romantic",
                "Dog Sleddig",
                "Parasailing",
                "Surprise Me!",
                "None",
              ]}
            />
          )}
          {currentFormPage === 7 && (
            <Select
              id="guide"
              label="Guide?"
              options={["Yes", "No", "Yes. For some trips, not all"]}
            />
          )}
          {currentFormPage === 8 && (
            <p className={styles["travel__form--confirmation"]}>
              Submit the form?
            </p>
          )}
        </div>
      </form>
      <div className={styles["travel__form--buttons"]}>
        {currentFormPage > 0 && (
          <button onClick={decrementFormPage}>Back</button>
        )}
        {currentFormPage < 8 && (
          <button onClick={incrementFormPage}>Next</button>
        )}
        {currentFormPage === 8 && <button>Submit</button>}
      </div>
    </div>
  );
};

export default Form;
