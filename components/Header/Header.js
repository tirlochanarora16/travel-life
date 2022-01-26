import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ReactMapGl, { Marker } from "react-map-gl";

import styles from "./Header.module.scss";
import * as data from "../../data/data.json";
import markerImage from "../../images/logos/pin.png";
import Link from "next/link";

const Header = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100%",
    height: '100%',
    zoom: 0,
  });

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
          <h1>trips worth remebering</h1>
          <p>
            Travel to somewhere new ! We&apos;ll map out your trip for you, organize
            your stay and plan great excursions.
          </p>
          <div className={styles["header__button"]}>
            <Link href="#">find a trip now</Link>
          </div>
        </div>
        {/* <div className={styles["header__map"]}>
          <ReactMapGl
            {...viewport}
            mapboxApiAccessToken={props.mapboxKey}
            // controller={true}
            mapStyle="mapbox://styles/mapbox/navigation-day-v1"
            onViewportChange={(viewport) => setViewport(viewport)}
          >
            {data.features.map((location) => (
              <Marker
                key={location.properties.LOCATION_ID}
                latitude={location.geometry.coordinates[1]}
                longitude={location.geometry.coordinates[0]}
              >
                <Image src={markerImage} width={20} height={25} alt="Travel Life marker" />
                <p style={{ fontSize: "2rem" }}>{location.properties.NAME}</p>
              </Marker>
            ))}
          </ReactMapGl>
        </div> */}
      </header>
    </Fragment>
  );
};
export default Header;
