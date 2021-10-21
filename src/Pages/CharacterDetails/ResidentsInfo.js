import styles from "./residentsInfo.module.scss";

import { useState, useEffect } from "react";

import fetchAll from "../../Helpers/fetchAll";

const ResidentsInfo = ({ residentUrls }) => {
  const [residentNames, setResidentNames] = useState([]);

  useEffect(() => {
    // Fetch names of all residents in residentUrls
    fetchAll(residentUrls)
      .then((data) => setResidentNames(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <span className={styles.container}>{residentNames.join(", ")}</span>;
};

export default ResidentsInfo;
