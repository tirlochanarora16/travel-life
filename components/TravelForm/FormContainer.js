import Form from "./Form";
import styles from "./FormContainer.module.scss";

const FormContainer = () => {
  return (
    <section className={styles["travel"]} id="travel">
      <h1 className={styles["travel__heading"]}>Travel Form</h1>
      <p className={styles["travel__title"]}>
        Take the first step towards your amazing journey. We promise to make it
        a memorable one. 😊
      </p>
      <Form forHeader={false} />
    </section>
  );
};

export default FormContainer;
