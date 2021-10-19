import styles from "./characterDetails.module.scss";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RICK_AND_MORTY_API_URL = "https://rickandmortyapi.com/api/character";

const CharacterDetails = () => {
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
    const data = await res.json();

    // Store data in state
    return setCharacterData(data);
  };

  useEffect(() => {
    fetchCharacter(`${RICK_AND_MORTY_API_URL}/${characterId}`);
  }, []);

  const episodesList = episode?.map((episode) => episode.split("episode/")[1]);
  const episodesString = episodesList?.join(", ");

  return (
    <div key={id} className={styles.container}>
      <h3 className={styles.container__return}>
        <Link to="/">Back to Home</Link>
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
            {origin?.name}
          </li>
          <li>
            <strong>Location: </strong>
            {location?.name}
          </li>
          <li>
            <strong>
              {episodesString?.length > 1 ? "Episodes" : "Episode"}:{" "}
            </strong>
            {episodesString}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
