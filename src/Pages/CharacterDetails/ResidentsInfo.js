import styles from "./residentsInfo.module.scss";

import { useState, useEffect } from "react";

const ResidentsInfo = ({ residentUrls }) => {
  const [residentNames, setResidentNames] = useState([]);

  const fetchAll = async (urls) => {
    const res = await Promise.all(urls?.map((u) => fetch(u)));
    const characterJsons = await Promise.all(res.map((r) => r.json()));

    const characterNamesList = characterJsons.map(
      (character) => character.name
    );
    setResidentNames(characterNamesList);
  };

  useEffect(() => {
    fetchAll(residentUrls);
  }, []);

  return <span className={styles.container}>{residentNames.join(", ")}</span>;
};

export default ResidentsInfo;
