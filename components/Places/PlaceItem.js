import { useRouter } from "next/router";

import styles from "./PlaceItem.module.scss";

const PlaceItem = (props) => {
  const router = useRouter();

  const navigateHandler = () => router.push("/#book-now");

  return (
    <div className={styles["place"]} onClick={navigateHandler}>
      <div
        className={styles["place__img"]}
        style={{
          backgroundImage: `url(${props.img})`,
        }}
      ></div>
      <div className={styles["place__text"]}>
        <h1>Travel to {props.title}</h1>
      </div>
    </div>
  );
};

export default PlaceItem;
