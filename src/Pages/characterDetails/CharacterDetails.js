import styles from "./characterDetails.module.scss";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import SearchCharacters from "../../components/UI/searchBar/SearchCharacters";
import LocationInfo from "./LocationInfo";
import EpisodeInfo from "./EpisodeInfo";

const RICK_AND_MORTY_API_URL = "https://rickandmortyapi.com/api/character";

const CharacterDetails = () => {
  const history = useHistory();
  const { characterId } = useParams();
  const [characterData, setCharacterData] = useState({});

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

  const fetchCharacter = async (url) => {
    // Fetch data from external API
    const res = await fetch(url);
    if (res.status === 200) {
      let data = await res.json();

      return setCharacterData(data);
    } else if (res.status >= 400 && res.status < 500) {
      return history.push("/error/404");
    } else if (res.status >= 500) {
      return history.push("/error/500");
    }
    // const data = await res.json();

    // Store data in state
    //return setCharacterData(data);
  };

  useEffect(() => {
    fetchCharacter(`${RICK_AND_MORTY_API_URL}/${characterId}`);
  }, []);

  const characterProfileJSX = (
    <div key={id}>
      <h3 className={styles.container__return} onClick={history.goBack}>
        Back
      </h3>
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

  return (
    <div className={styles.container}>
      <SearchCharacters />
      <h3 className={styles.container__home}>
        <Link to="/">Back to Home</Link>
      </h3>
      {characterProfileJSX}
    </div>
  );
};

export default CharacterDetails;
