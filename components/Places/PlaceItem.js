import Image from "next/image";

import kenyaImg from "../../images/places/kenya.jpg";

import styles from "./PlaceItem.module.scss";

const PlaceItem = (props) => {
  const cardSide = "card__side";
  const cardFront = "card__side--front";
  return (
    <div className={styles["place"]}>
      <div className={styles["place__img"]}>
          <Image src={props.img} width={400} height={300} />
      </div>
      <div className={styles["place__text"]}>
          <h1>Travel to {props.title}</h1>
      </div>
    </div>
  );
};

export default PlaceItem;
