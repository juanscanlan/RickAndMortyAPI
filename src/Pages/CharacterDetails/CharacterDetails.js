import styles from "./characterDetails.module.scss";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import SearchBar from "../../components/UI/SearchBar/SearchBar";
import CharacterProfile from "./CharacterProfile";

const CharacterDetails = ({ fetchData }) => {
  const history = useHistory();
  const { characterId } = useParams();
  const [characterData, setCharacterData] = useState({});

  useEffect(() => {
    // Fetch character data for a given character id
    fetchData(`character/${characterId}`)
      .then((data) => setCharacterData(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <SearchBar />
      <h3 className={styles.container__home}>
        <Link to="/">Back to Home</Link>
      </h3>
      <h3 className={styles.container__return} onClick={history.goBack}>
        Back
      </h3>
      <CharacterProfile characterData={characterData} />
    </div>
  );
};

export default CharacterDetails;
