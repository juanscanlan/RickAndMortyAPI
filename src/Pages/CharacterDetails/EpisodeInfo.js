import styles from "./episodeInfo.module.scss";

import { useState, useEffect } from "react";

const EpisodeInfo = ({ episodeUrls }) => {
  const [episodeNames, setEpisodeNames] = useState([]);

  // Fetch episode name for all episodes in epsidoesUrl array
  const fetchAll = async (urls) => {
    const res = await Promise.all(urls?.map((u) => fetch(u)));
    const episodeJsons = await Promise.all(res.map((r) => r.json()));

    const episodeNamesList = episodeJsons.map((episode) => episode.name);
    setEpisodeNames(episodeNamesList);
  };

  useEffect(() => {
    fetchAll(episodeUrls);
  }, []);

  return <div className={styles.container}>{episodeNames.join(", ")}</div>;
};

export default EpisodeInfo;
