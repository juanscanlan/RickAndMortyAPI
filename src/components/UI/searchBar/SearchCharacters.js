import styles from "./searchCharacters.module.scss";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchCharacters = () => {
  const history = useHistory();

  const [inputName, setInputName] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [inputGender, setInputGender] = useState("");

  const handleStatusChange = (event) => {
    setInputStatus(event.target.value);
  };

  const handleGenderChange = (event) => {
    setInputGender(event.target.value);
  };

  const onSubmitHandler = (event) => {
    // Prevent page from reloading
    event.preventDefault();

    //Create query string
    let queryString = `${inputName && `name=` + inputName}${
      inputName && inputStatus && `&`
    }${inputStatus}${
      (inputName || inputStatus) && inputGender && `&`
    }${inputGender}`;

    // Push input to url page if a query is made, else it returns to home
    history.push(`${queryString && "/search/" + queryString}`);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.container}>
      <div className={styles.container__options}>
        <div>
          <span>Status: </span>
          <select onChange={handleStatusChange}>
            <option value="">All</option>
            <option value="status=alive">Alive</option>
            <option value="status=dead">Dead</option>
            <option value="status=unknown">Unknown</option>
          </select>
        </div>
        <div>
          <span>Gender: </span>
          <select onChange={handleGenderChange}>
            <option value="">All</option>
            <option value="gender=male">Male</option>
            <option value="gender=female">Female</option>
            <option value="gender=genderless">Genderless</option>
            <option value="gender=unknown">Unknown</option>
          </select>
        </div>
      </div>

      <div className={styles.container__search}>
        <input
          type="text"
          name="characterSearchInput"
          placeholder="Search for a character"
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchCharacters;
