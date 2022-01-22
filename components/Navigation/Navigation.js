import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Navigation.module.scss";
import logo from "../../images/logos/logo.svg";

const NavigationMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  });

  const showMobileMenu = () => {
    setToggleMenu(!toggleMenu);
    console.log(window.innerWidth);
  };

  console.log(toggleMenu);

  return (
    <Fragment>
      {/* <div className={styles["mobile__menu"]}>
        <div className={styles["mobile__menu--logo"]}>
          <Link href="#">
            <Image src={logo} alt="Travel Life Logo" />
          </Link>
        </div>
        <div
          className={styles["mobile__menu--button"]}
          onClick={showMobileMenu}
        ></div>
      </div> */}

      <nav className={styles["navigation"]}>
        <div className={styles["navigation__menu"]}>
          <ul className={styles["navigation__menu--list"]}>
          <li className={styles["navigation__menu--logo-phone"]}>
              <Link href="#">
                <Image src={logo} alt="Travel Life Logo" />
              </Link>
            </li>
            <li>
              <Link href="#">Go Where?</Link>
            </li>
            <li>
              <Link href="#">Excursions</Link>
            </li>
            <li className={styles["navigation__menu--logo"]}>
              <Link href="#">
                <Image src={logo} alt="Travel Life Logo" />
              </Link>
            </li>
            <li>
              <Link href="#">Travel Form</Link>
            </li>
            <li>
              <Link href="#">Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavigationMenu;
