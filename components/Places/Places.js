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

const Places = () => {
  return (
    <section className={styles["places"]}>
      <div className={styles["places__content"]}>
        <h1 className={styles["places__title"]}>Places</h1>
        <p className={styles["places__text"]}>
          We have selected some destinations that we know very well ! Tell us
          what you want & where you wanna go. We'll make it happen for you !
        </p>
        <div className={styles["places__row"]}>
          <PlaceItem title="Svalbard" img={svalbardImg} />
          <PlaceItem title="Artic" img={articImg} />
          <PlaceItem title="French Guiana" img={frenchGuianaImg} />
        </div>
        <div className={styles["places__row"]}>
          <PlaceItem title="Madagascar" img={madagascarImg} />
          <PlaceItem title="Mauritius" img={mauritiusImg} />
          <PlaceItem title="Mayotte" img={mayotteImg} />
        </div>
        <div className={styles["places__row"]}>
          <PlaceItem title="Senegal" img={senegalImg} />
          <PlaceItem title="Thailand" img={thailandImg} />
          <PlaceItem title="someplace else" img={randomImg} />
        </div>
        <div className={styles["places__row"]}></div>
      </div>
    </section>
  );
};

export default Places;