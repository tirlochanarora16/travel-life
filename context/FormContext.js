import React, { useState } from "react";

export const FormContext = React.createContext();

const FormProvider = ({ children }) => {
  // state for managing the current page
  const [currentFormPage, setCurrentFormPage] = useState(0);

  // state for handing the form information
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    mobile: "",
    budget: "",
    destination: "United States of America",
    reason: "Leisure & Tourism",
    excrusion: "Snowmobile",
    guide: "Yes",
  });

  // state for handling errors in case the form is invalid
  const [error, setError] = useState(true);

  // state for handling the loading state
  const [isLoading, setIsLoading] = useState(false);

  // state for handling http messages
  const [message, setMessage] = useState("");

  const incrementFormPage = () =>
    setCurrentFormPage((previousCount) => previousCount + 1);

  const decrementFormPage = () =>
    setCurrentFormPage((previousCount) => previousCount - 1);

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    console.log("Hello");

    // setIsLoading(true);

    // const request = await fetch("http://localhost:3000/api/form", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({ formInfo }),
    // });

    // const response = await request.json();
    // setIsLoading(false);

    // if (response.msg) {
    //   setMessage(
    //     "Thanks so much for reaching out. Prepare yourself to awesome holidays ! We'll get back to you very soon."
    //   );
    // } else {
    //   setMessage("Error while sending the inquiry. Please try again");
    // }
  };

  return (
    <FormContext.Provider
      value={{
        currentFormPage,
        formInfo,
        error,
        isLoading,
        message,
        setFormInfo,
        formSubmitHandler,
        incrementFormPage,
        decrementFormPage,
        setError,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
