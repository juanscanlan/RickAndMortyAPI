import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchCharacters = () => {
  const history = useHistory();

  const [input, setInput] = useState("");

  const onClickHandler = (event) => {
    // Prevent page from reloading
    event.preventDefault();

    // Push input to url page
    history.push("/search/" + input);

    // Reset input
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        name="characterSearchInput"
        placeholder="Search for a character"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={onClickHandler}>Search</button>
    </div>
  );
};

export default SearchCharacters;
