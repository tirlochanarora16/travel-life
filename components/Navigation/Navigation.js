import Link from "next/link";
import Image from "next/image";

import styles from "./Navigation.module.scss";
import logo from "../../images/logos/logo.svg";

const NavigationMenu = () => {
  return (
    <nav className={styles["navigation"]}>
      <div className={styles["navigation__menu"]}>
        <ul className={styles["navigation__menu--list"]}>
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
  );
};

export default NavigationMenu;
