import { useState, useEffect } from "react";
import styles from "./characters.module.scss";
import CharacterProfile from "../../components/Character/CharacterProfile";
import Pagination from "../../components/UI/Pagination/Pagination";

const Characters = ({ fetchData }) => {
  const [charactersData, setCharactersData] = useState({});
  const { info, results } = charactersData;

  useEffect(() => {
    // Fetch character data
    fetchData("character")
      .then((data) => setCharactersData(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePageChange = (page) => {
    // Fetch character data at selected page number
    fetchData(`character/?page=${page}`).then((data) =>
      setCharactersData(data)
    );
  };

  return (
    <div className={styles.container}>
      <Pagination handlePageChange={handlePageChange} pageCount={info?.pages} />
      {results && <CharacterProfile characterData={results} />}
    </div>
  );
};

export default Characters;
