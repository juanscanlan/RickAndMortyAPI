import { useState, useEffect } from "react";
import styles from "./characters.module.scss";
import CharacterProfile from "../../components/character/CharacterProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../../components/UI/pagination/Pagination";

const RICK_AND_MORTY_API_URL = "https://rickandmortyapi.com/api/character";

const Characters = () => {
  const [apiData, setApiData] = useState({});
  const { info, results } = apiData;

  const fetchCharacters = async (url) => {
    // Fetch data from external API
    const res = await fetch(url);
    const data = await res.json();
    // Store data in state
    return setApiData(data);
  };

  useEffect(() => {
    fetchCharacters(RICK_AND_MORTY_API_URL);
  }, []);

  const handlePreviousPage = () => {
    // Api provides 'prev' key with link to the previous page (if it exists)
    if (info.prev) {
      fetchCharacters(info.prev);
    }
  };

  const handleNextPage = () => {
    // Api provides 'next' key with link to the next page (if it exists)
    if (info.next) {
      fetchCharacters(info.next);
    }
  };

  const handlePage = (page) => {
    fetchCharacters(`${RICK_AND_MORTY_API_URL}/?page=${page}`);
    console.log("yeet");
  };

  // const paginationJSX = (
  //   <div className={styles.pagination}>
  //     {info?.prev && (
  //       <button
  //         className={styles.pagination__left}
  //         onClick={handlePreviousPage}
  //       >
  //         <FontAwesomeIcon
  //           className={styles.pagination__icon}
  //           icon={faArrowLeft}
  //         />{" "}
  //         Prev Page
  //       </button>
  //     )}
  //     {info?.next && (
  //       <button className={styles.pagination__right} onClick={handleNextPage}>
  //         Next Page{" "}
  //         <FontAwesomeIcon
  //           className={styles.pagination__icon}
  //           icon={faArrowRight}
  //         />
  //       </button>
  //     )}
  //   </div>
  // );

  return (
    <div className={styles.container}>
      <Pagination
        data={{ handlePreviousPage, handleNextPage, handlePage }}
        pageCount={info?.pages}
      />
      {results && <CharacterProfile characterData={results} />}
    </div>
  );
};

export default Characters;
