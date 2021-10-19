import styles from "./characterDetails.module.scss";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  console.log(location?.name);
  return (
    <div key={id} className={styles.container}>
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
        </ul>
      </div>

      {/* <span>{episode}</span> */}
    </div>
  );
};

export default CharacterDetails;
