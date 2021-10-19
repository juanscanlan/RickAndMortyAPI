import styles from "./characterProfile.module.scss";

import { Link } from "react-router-dom";

const CharacterProfile = ({ characterData }) => {
  const characterJSX = characterData.map((character) => {
    return (
      <div className={styles.card} key={character.id}>
        <Link to={`/${character.id}`}>
          <img
            className={styles.card__image}
            src={character.image}
            alt={`${character.name} ${character.id} thumbnail`}
          />
        </Link>

        <span className={styles.card__name}>{character.name}</span>
      </div>
    );
  });

  return <div className={styles.container}>{characterJSX}</div>;
};

export default CharacterProfile;
