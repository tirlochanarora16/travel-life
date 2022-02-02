import styles from "./Heading.module.scss";

const Heading = (props) => {
  return <h1 className={styles["heading__title"]}>{props.title}</h1>;
};

export default Heading;
