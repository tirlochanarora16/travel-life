import { useState } from "react";
import styles from "./Form.module.scss";
import Input from "./Input";
import Select from "./Select";

export const formValues = {
  name: "",
  email: "",
  mobile: "",
  destination: "",
  reason: "",
  excrusion: "",
  guide: "",
  budget: 0,
};

const Form = (props) => {
  const setFormValues = (data) => {
    const { inputFor, value } = data;
    formValues[inputFor] = value;
    console.log(formValues);
  };

  return (
    <section className={styles["travel"]}>
      <h1 className={styles["travel__heading"]}>Travel Form</h1>

      <div className={styles["travel__form"]}>
        <form>
          <div className={styles["travel__form--row"]}>
            <Input
              type="text"
              id="name"
              placeholder="Enter Full Name"
              label="Name"
              setInputValue={setFormValues}
            />
            <Input
              type="email"
              id="email"
              placeholder="Enter Email"
              label="E-mail"
              setInputValue={setFormValues}
            />
            <Input
              type="number"
              id="mobile"
              placeholder="Enter Mobile"
              label="Phone"
              setInputValue={setFormValues}
            />
            <Input
              type="number"
              id="budget"
              placeholder="Enter Budget (in USD)"
              label="Budget"
              setInputValue={setFormValues}
            />
          </div>
          <div className={styles["travel__form--row"]}>
            {/* <Input type="text" id="destination" placeholder="Where would you like to go?" label="Visit" /> */}
            <Select
              id="destination"
              label="Destination: "
              options={["USA", "Canada", "France", "Spain", "Other"]}
              setInputValue={setFormValues}
            />
            <Select
              id="reason"
              label="Reason: "
              options={["Leisure & Tourism", "Work", "Honey Moon"]}
              setInputValue={setFormValues}
            />
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
              setInputValue={setFormValues}
            />
            <Select
              id="guide"
              label="Guide?"
              options={["Yes", "No", "Yes. For some trips, not all"]}
              setInputValue={setFormValues}
            />
          </div>
        </form>
        <div className={styles["travel__form--button"]}>
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Form;
