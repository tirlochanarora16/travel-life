import React, { useState } from "react";

export const FormContext = React.createContext();

const FormProvider = ({ children }) => {
  const [currentFormPage, setCurrentFormPage] = useState(0);
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

  const incrementFormPage = () =>
    setCurrentFormPage((previousCount) => previousCount + 1);

  const decrementFormPage = () =>
    setCurrentFormPage((previousCount) => previousCount - 1);

  return (
    <FormContext.Provider
      value={{
        currentFormPage,
        formInfo,
        setFormInfo,
        incrementFormPage,
        decrementFormPage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
