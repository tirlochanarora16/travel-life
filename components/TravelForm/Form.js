import { useContext, useEffect, useState } from "react";
import Heading from "../UI/Heading";
import Input from "./Input";
import Select from "./Select";
import { FormContext } from "../../context/FormContext";

import { countries } from "../../utils/countriesList";

import styles from "./Form.module.scss";

const Form = (props) => {
  const { currentFormPage, incrementFormPage, decrementFormPage } =
    useContext(FormContext);

  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      className={styles["travel__form"]}
      style={{
        marginTop: props.forHeader && width > 400 ? "-15rem" : "-9rem",
        position: props.forHeader ? "relative" : "",
        zIndex: props.forHeader ? "200" : "",
        backgroundColor: props.forHeader ? "#f2f2f2" : "",
      }}
    >
      <form>
        {props.forHeader && (
          <div className={styles["travel__form-text"]}>
            <Heading title="BOOK YOUR ADVENTURE NOW" />
            <p>
              Where have you always wanted to go ? We&apos;ll make it happen for
              you. You&apos;re just a few clicks away ! Submit the form and
              we&apos;ll be in touch.
            </p>
          </div>
        )}
        <div className={styles["travel__form--row"]}>
          {currentFormPage === 0 && (
            <Input
              type="text"
              id="name"
              placeholder="Enter Full Name"
              label="Name"
            />
          )}
          {currentFormPage === 0 && (
            <Input
              type="email"
              id="email"
              placeholder="Enter Email"
              label="E-mail"
            />
          )}
          {currentFormPage === 0 && (
            <Input
              type="number"
              id="mobile"
              placeholder="Enter Mobile"
              label="Phone"
            />
          )}
          {currentFormPage === 5 && (
            <Input
              type="number"
              id="budget"
              placeholder="Enter Budget (in USD)"
              label="Budget"
            />
          )}
        </div>
        <div className={styles["travel__form--row"]}>
          {currentFormPage === 1 && (
            <Select
              id="destination"
              label="Destination: "
              options={countries}
            />
          )}
          {currentFormPage === 2 && (
            <Select
              id="reason"
              label="Reason: "
              options={["Leisure & Tourism", "Work", "Honey Moon"]}
            />
          )}
          {currentFormPage === 3 && (
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
          {currentFormPage === 4 && (
            <Select
              id="guide"
              label="Guide?"
              options={["Yes", "For some trips", "No thanks"]}
            />
          )}
          {currentFormPage === 6 && (
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
        {currentFormPage < 6 && (
          <button onClick={incrementFormPage}>Next</button>
        )}
        {currentFormPage === 6 && <button>Submit</button>}
      </div>
    </div>
  );
};

export default Form;
