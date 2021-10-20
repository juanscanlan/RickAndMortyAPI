import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterProfile from "../../components/character/CharacterProfile";
import Pagination from "../../components/UI/pagination/Pagination";
import SearchCharacters from "../../components/UI/searchBar/SearchCharacters";
import Header from "./Header";

const RICK_AND_MORTY_API_URL = "https://rickandmortyapi.com/api/character";

const Search = () => {
  const { searchTerm } = useParams();
  const [searchData, setSearchData] = useState({});
  const { info, results } = searchData;

  const fetchCharacter = async (url) => {
    // Fetch data from external API
    const res = await fetch(url);
    const data = await res.json();

    // Store data in state
    return setSearchData(data);
  };

  useEffect(() => {
    fetchCharacter(`${RICK_AND_MORTY_API_URL}/?name=${searchTerm}`);
  }, []);

  const handlePreviousPage = () => {
    // Api provides 'prev' key with link to the previous page (if it exists)
    if (info.prev) {
      fetchCharacter(info.prev);
    }
  };

  const handleNextPage = () => {
    // Api provides 'next' key with link to the next page (if it exists)
    if (info.next) {
      fetchCharacter(info.next);
    }
  };

  const handlePage = (page) => {
    fetchCharacter(
      `${RICK_AND_MORTY_API_URL}/?page=${page}&name=${searchTerm}`
    );
    console.log("yeet");
  };

  return (
    <div>
      <Header />
      <SearchCharacters />
      <Pagination
        data={{ handlePreviousPage, handleNextPage, handlePage }}
        pageCount={info?.pages}
      />
      {results && <CharacterProfile characterData={results} />}
    </div>
  );
};

export default Search;
