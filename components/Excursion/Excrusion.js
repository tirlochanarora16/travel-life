import ExcrusionItem from "./ExcrusionItem";
import Heading from "../UI/Heading";

import styles from "./Excrusion.module.scss";

import snowmobile from "../../images/excrusion/snowmobile.jpg";
import horseRiding from "../../images/excrusion/horseRiding.jpg";
import treeClimbing from "../../images/excrusion/treeClimbing.jpg";
import adventure from "../../images/excrusion/adventure.jpg";
import beach from "../../images/excrusion/beach.jpg";
import cruising from "../../images/excrusion/cruising.jpg";
import island from "../../images/excrusion/island.jpg";
import jetski from "../../images/excrusion/jetski.jpg";
import romantic from "../../images/excrusion/romantic.jpg";
import sledding from "../../images/excrusion/sledding.jpg";
import surprise from "../../images/excrusion/surprise.jpg";
import parasailing from "../../images/excrusion/parasailing.jpg";

const Excrusion = () => {
  return (
    <section className={styles["excrusion"]} id="excrusions">
      <Heading title="Excursion" />
      <div className={styles["excrusion__content"]}>
        <div className={styles["excrusion__content--row"]}>
          <ExcrusionItem image={snowmobile.src} title="Go! Snowmobile" />
          <ExcrusionItem image={horseRiding.src} title="Go! Horse riding" />
          <ExcrusionItem image={treeClimbing.src} title="Go! tree climbing" />
        </div>
        <div className={styles["excrusion__content--row"]}>
          <ExcrusionItem image={adventure.src} title="Go! adventure" />
          <ExcrusionItem image={beach.src} title="Go! Beach" />
          <ExcrusionItem image={cruising.src} title="Go! cruising" />
        </div>
        <div className={styles["excrusion__content--row"]}>
          <ExcrusionItem image={island.src} title="Go! island" />
          <ExcrusionItem image={jetski.src} title="Go! Jet Ski" />
          <ExcrusionItem image={romantic.src} title="Go! romantic" />
        </div>
        <div className={styles["excrusion__content--row"]}>
          <ExcrusionItem image={sledding.src} title="Go! dog sledding" />
          <ExcrusionItem image={parasailing.src} title="Go! Parasailing" />
          <ExcrusionItem image={surprise.src} title="surprise me!" />
        </div>
      </div>
    </section>
  );
};

export default Excrusion;
