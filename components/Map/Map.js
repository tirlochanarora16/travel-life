import { useState, useEffect } from "react";
import Image from "next/image";
import ReactMapGl, { Marker } from "react-map-gl";
import Heading from "../UI/Heading";

import data from "../../data/data.json";
import markerImage from "../../images/logos/pin.png";

import styles from "./Map.module.scss";

const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -4.6903,
    width: "50vw",
    height: "80vh",
    zoom: 0,
  });

  return (
    <div className={styles["destinations"]}>
      <Heading title="destinations" />
      <div className={styles["map"]}>
        <div className={styles["map__container"]}>
          <ReactMapGl
            {...viewport}
            mapboxApiAccessToken={props.mapboxKey}
            
            mapStyle="mapbox://styles/mapbox/navigation-day-v1"
            onViewportChange={(viewport) => setViewport(viewport)}
          >
            {data.features.map((location) => (
              <Marker
                key={location.properties.LOCATION_ID}
                latitude={location.geometry.coordinates[1]}
                longitude={location.geometry.coordinates[0]}
              >
                <Image
                  src={markerImage}
                  width={30}
                  height={40}
                  alt="Travel Life marker"
                />
                <p style={{ fontSize: "2.5rem" }}>{location.properties.NAME}</p>
              </Marker>
            ))}
          </ReactMapGl>
        </div>
      </div>
    </div>
  );
};

export default Map;
