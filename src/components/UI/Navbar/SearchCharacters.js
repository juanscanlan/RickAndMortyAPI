import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const SearchCharacters = () => {
  const searchInput = useRef();

  const [input, setInput] = useState("");

  // const [character, setCharacter] = useState("");

  // const searchCharacter = async (character) => {
  //   const searchUrl = `https://rickandmortyapi.com/api/character/?name=${character}`;
  //   // Fetch data from external API
  //   const res = await fetch(searchUrl);
  //   const data = await res.json();
  //   // Store data in state
  //   return setCharacter(data);
  // };

  const onSubmitHandler = (event) => {
    // Prevent page from reloading
    event.preventDefault();
    History.push("/search/" + input);

    setInput("");

    //searchCharacter(searchInput.current.value);
    console.log(searchInput.current.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="characterSearchInput"
        placeholder="Search for a character"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {/* <Link to={`/search/${searchInput.current?.value}`}> */}
      <button type="submit">Search</button>
      {/* </Link> */}
    </form>
  );
};

export default SearchCharacters;
