import styles from "./episodeInfo.module.scss";

import { useState, useEffect } from "react";

import fetchAll from "../../Helpers/fetchAll";

const EpisodeInfo = ({ episodeUrls }) => {
  const [episodeNames, setEpisodeNames] = useState([]);

  useEffect(() => {
    // Fetch names of all episodes in episodesUrls
    fetchAll(episodeUrls)
      .then((data) => setEpisodeNames(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div className={styles.container}>{episodeNames.join(", ")}</div>;
};

export default EpisodeInfo;
