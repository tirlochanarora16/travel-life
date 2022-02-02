import PlaceItem from "./PlaceItem";
import styles from "./Places.module.scss";

import svalbardImg from "../../images/places/svalbard.jpg";
import articImg from "../../images/places/artic.jpg";
import frenchGuianaImg from "../../images/places/french_guiana.jpg";
import madagascarImg from "../../images/places/madagascar.jpg";
import mauritiusImg from "../../images/places/mauritius.jpg";
import mayotteImg from "../../images/places/mayotte.jpg";
import senegalImg from "../../images/places/senegal.jpg";
import thailandImg from "../../images/places/thailand.jpg";
import randomImg from "../../images/places/random.jpg";
import Heading from "../UI/Heading";

const Places = () => {
  return (
    <section className={styles["places"]} id="places">
      <div className={styles["places__content"]}>
        <Heading title="Places" />
        <p className={styles["places__text"]}>
          We have selected some destinations that we know very well ! Tell us
          what you want & where you wanna go. We&apos;ll make it happen for you !
        </p>
        <div className={styles["places__row"]}>
          <PlaceItem title="Svalbard" img={svalbardImg.src} />
          <PlaceItem title="Artic" img={articImg.src} />
          <PlaceItem title="French Guiana" img={frenchGuianaImg.src} />
        </div>
        <div className={styles["places__row"]}>
          <PlaceItem title="Madagascar" img={madagascarImg.src} />
          <PlaceItem title="Mauritius" img={mauritiusImg.src} />
          <PlaceItem title="Mayotte" img={mayotteImg.src} />
        </div>
        <div className={styles["places__row"]}>
          <PlaceItem title="Senegal" img={senegalImg.src} />
          <PlaceItem title="Thailand" img={thailandImg.src} />
          <PlaceItem title="someplace else" img={randomImg.src} />
        </div>
        <div className={styles["places__row"]}></div>
      </div>
    </section>
  );
};

export default Places;
