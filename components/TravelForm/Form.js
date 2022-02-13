import { useContext, useEffect, useState } from "react";
import Heading from "../UI/Heading";
import Input from "./Input";
import Select from "./Select";
import { FormContext } from "../../context/FormContext";

import { countries } from "../../utils/countriesList";

import styles from "./Form.module.scss";

const Form = (props) => {
  // importing variables and functions from the FormContext
  const {
    currentFormPage,
    incrementFormPage,
    decrementFormPage,
    formSubmitHandler,
    isLoading,
    message,
    error,
    formInfo,
    setFormInfo,
  } = useContext(FormContext);

  // using state to check the width of the screen
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const inputChangeHandler = (event) => {
    const targetId = event.target.id;
    const targetValue = event.target.value;

    setFormInfo((previousState) => {
      return { ...previousState, [targetId]: targetValue };
    });
  };

  return (
    <div
      // conditional classes to be added to add the form below the header
      className={styles["travel__form"]}
      style={{
        marginTop: props.forHeader && width > 400 ? "-15rem" : "",
        position: props.forHeader ? "relative" : "",
        zIndex: props.forHeader ? "200" : "",
        backgroundColor: props.forHeader ? "#f2f2f2" : "",
      }}
      id={props.forHeader ? "book-now" : ""}
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
          {currentFormPage === 6 && (
            <div className={styles["duration"]}>
              <div className={styles["duration__from"]}>
                <label htmlFor="from">From: </label>
                <input
                  type="date"
                  id="from"
                  onChange={inputChangeHandler}
                  value={formInfo["from"]}
                />
              </div>
              <div className={styles["duration__to"]}>
                <label htmlFor="to">To: </label>
                <input
                  type="date"
                  id="to"
                  onChange={inputChangeHandler}
                  value={formInfo["to"]}
                />
              </div>
            </div>
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
          {currentFormPage === 7 && !isLoading && !message && (
            <p className={styles["travel__form--confirmation"]}>
              Submit the form?
            </p>
          )}
          {currentFormPage === 7 && isLoading && !message && (
            <p className={styles["travel__form--confirmation"]}>
              Processing...
            </p>
          )}
          {currentFormPage === 7 && !isLoading && message && (
            <p
              className={styles["travel__form--confirmation"]}
              style={{ letterSpacing: "0" }}
            >
              {message}
            </p>
          )}
        </div>
      </form>
      <div className={styles["travel__form--buttons"]}>
        {currentFormPage > 0 && (
          <button onClick={decrementFormPage} type="button">
            Back
          </button>
        )}
        {currentFormPage < 7 && (
          <button onClick={incrementFormPage} type="button">
            Next
          </button>
        )}
        {currentFormPage === 7 && !isLoading && !message && (
          <button
            onClick={formSubmitHandler}
            disabled={error}
            style={{
              backgroundColor: error ? "#84868a" : "",
              cursor: error ? "not-allowed" : "",
            }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
