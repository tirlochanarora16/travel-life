import Image from "next/image";

import facebook from "../../images/footer/facebook.png";
import youtube from "../../images/footer/youtube.png";
import instagram from "../../images/footer/instagram.png";
import devices from "../../images/footer/devices.png";
import logo from "../../images/footer/logo.png";
import logo2 from "../../images/logos/logo_large.png";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__social"]}>
        <div className={styles["footer__social-content"]}>
          <h2>find us on social media</h2>
          <div className={styles["footer__icons"]}>
            <a href="#" className={styles["footer__icons-container"]}>
              <div>
                <Image
                  src={facebook}
                  alt="Facebook Logo"
                  height={40}
                  width={40}
                />
              </div>
              <h3>Facebook</h3>
            </a>
            <a href="#" className={styles["footer__icons-container"]}>
              <div>
                <Image
                  src={youtube}
                  alt="YouTube Logo"
                  height={40}
                  width={50}
                />
              </div>
              <h3>YouTube</h3>
            </a>
            <a href="#" className={styles["footer__icons-container"]}>
              <div>
                <Image
                  src={instagram}
                  alt="Instagram Logo"
                  height={40}
                  width={40}
                />
              </div>
              <h3>Instagram</h3>
            </a>
          </div>
        </div>
      </div>
      <div className={styles["footer__legal"]}>
        <div className={styles["footer__legal-container"]}>
          <div className={styles["footer__legal-box"]}>
            <div className={styles["footer__legal-box-1"]}>
              <Image
                src={devices}
                alt="Devices Images"
                width={80}
                height={50}
              />
            </div>
            <div className={styles["footer__legal-box-2"]}>
              <p>
                To offer you a better reading comfort, from your PC, Mac, tablet
                or smartphone, our websites automatically adapts to different
                screen sizes. Welcome to a responsive website.
              </p>
            </div>
            <div className={styles["footer__legal-box-3"]}>
              <Image
                src={logo}
                alt="Go Make Apps Logo"
                width={50}
                height={80}
              />
            </div>
            <div className={styles["footer__legal-box-4"]}>
              <ul>
                <li>Software Creation</li>
                <li>Website Design</li>
                <li>Mobile App Development</li>
              </ul>
            </div>
          </div>
          <div className={styles["footer__link"]}>
            <a href="#">www.gomakeapps.com</a>
          </div>
        </div>

        <div className={styles["footer__legal-content"]}>
          <div className={styles["footer__services"]}>
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Plan a trip</a>
              </li>
              <li>
                <a href="#">Plan excursions</a>
              </li>
              <li>
                <a href="#">Plan a flight</a>
              </li>
              <li>
                <a href="#">Plan a stay</a>
              </li>
            </ul>
          </div>
          <div className={styles["footer__agency"]}>
            <h3>The Agency</h3>
            <div>
              <Image
                src={logo2}
                alt="Travel Life Logo"
                width={100}
                height={50}
              />
            </div>
          </div>
          <div className={styles["footer__privacy"]}>
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">General condition of use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
