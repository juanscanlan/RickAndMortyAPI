import styles from "./characterProfile.module.scss";

import LocationInfo from "./LocationInfo";
import EpisodeInfo from "./EpisodeInfo";

const CharacterProfile = ({ characterData }) => {
  const {
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
  } = characterData;

  return (
    <div key={id}>
      <h2 className={styles.container__name}>{name}</h2>
      <div className={styles.card}>
        <img
          className={styles.card__image}
          src={image}
          alt={`${name} ${id} thumbnail`}
        />
        <ul className={styles.card__info}>
          <li>
            <strong>Status: </strong> {status}
          </li>
          <li>
            <strong>Species: </strong> {species}
          </li>
          <li>
            <strong>Type: </strong> {type || "N/A"}
          </li>
          <li>
            <strong>Gender: </strong>
            {gender}
          </li>
          <li>
            <strong>Origin: </strong>
            {origin && <LocationInfo locationInfo={origin} />}
          </li>
          <li>
            <strong>Location: </strong>
            {location && <LocationInfo locationInfo={location} />}
          </li>
          <li>
            <strong>Episodes: </strong>
            {episode && <EpisodeInfo episodeUrls={episode} />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterProfile;
