import styles from "./search.module.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterProfile from "../../components/Character/CharacterProfile";
import Pagination from "../../components/UI/Pagination/Pagination";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import Header from "./Header";
import NoResults from "./NoResults";

const Search = ({ fetchData }) => {
  const { searchTerm } = useParams();
  const [searchData, setSearchData] = useState({});
  const { info, results, error } = searchData;

  useEffect(() => {
    // Fetch data for given search term
    fetchData(`character/?${searchTerm}`).then((data) => setSearchData(data));
  }, [searchTerm]);

  const handlePageChange = (page) => {
    // Fetch data for given search term at a specific page
    fetchData(`character/?page=${page}&${searchTerm}`).then((data) =>
      setSearchData(data)
    );
  };

  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
      <Pagination handlePageChange={handlePageChange} pageCount={info?.pages} />
      {results && <CharacterProfile characterData={results} />}
      {error && <NoResults />}
    </div>
  );
};

export default Search;
