import Image from "next/image";
import { useState } from "react";

import kenyaImg from "../../images/places/kenya.jpg";

import styles from "./PlaceItem.module.scss";

const PlaceItem = (props) => {

  return (
    <div className={styles["place"]}>
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
