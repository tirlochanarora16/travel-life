import { Fragment } from "react";
import Head from "next/head";

import styles from "./Header.module.scss";

import Link from "next/link";

const Header = () => {
  return (
    <Fragment>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <header className={styles["header"]}>
        <div className={styles["header__content"]}>
          <h1>GO ON A JOURNEY YOU WILL NEVER FORGET !</h1>
          <p>
            Travel to somewhere new ! We&apos;ll map out your trip for you,
            organize your stay and plan great excursions.
          </p>
          <div className={styles["header__button"]}>
            <Link href="#places">find a trip now</Link>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
