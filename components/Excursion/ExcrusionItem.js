import styles from "./ExcrusionItem.module.scss";

import snowmobile from "../../images/excrusion/snowmobile.jpg";

const ExcrusionItem = (props) => {
  const imagePath = `url(/images/excrusion/${props.image}.jpg})`;
  return (
    <div
      className={styles["exrusion__item"]}
      style={{
        backgroundImage: `linear-gradient(to left bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`,
      }}
    >
      <h1 className={styles["exrusion__item--heading"]}>{props.title}</h1>
      <div className={styles["exrusion__item--content"]}></div>
    </div>
  );
};

export default ExcrusionItem;
