import styles from "./locationInfo.module.scss";

import { useState, useEffect } from "react";
import ResidentsInfo from "./ResidentsInfo";

const LocationInfo = ({ locationInfo }) => {
  const { name, url: locationUrl } = locationInfo;
  const [locationData, setLocationData] = useState({});
  const { type, dimension, residents, created } = locationData;

  const fetchLocation = async (url) => {
    // Fetch data from external API
    const res = await fetch(url);
    const data = await res.json();

    // Return data
    return data;
  };

  useEffect(() => {
    let fetchedData = fetchLocation(locationUrl);

    fetchedData.then((data) => setLocationData(data));
  }, []);

  const locationJSX = (
    <>
      <span>
        <strong>Name: </strong>
        {name}
      </span>
      <span>
        <strong>Type: </strong> {type}
      </span>
      <span>
        <strong>Dimension: </strong> {dimension}
      </span>
      <span>
        <strong>Created: </strong> {created}
      </span>
      <span>
        <strong>Residents: </strong> {residents?.length}
        {residents && <ResidentsInfo residentUrls={residents} />}
      </span>
    </>
  );

  return (
    <div className={styles.container}>
      {name !== "unknown" ? locationJSX : "Unknown"}
    </div>
  );
};

export default LocationInfo;
