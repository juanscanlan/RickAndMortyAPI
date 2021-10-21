import { useState } from "react";
import { useHistory } from "react-router-dom";
import FormContent from "./FormContent";

const SearchBar = () => {
  const history = useHistory();

  const [inputName, setInputName] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [inputGender, setInputGender] = useState("");

  const handleInputChange = (event) => {
    setInputName(event.target.value);
  };

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
    <FormContent
      inputName={inputName}
      onSubmit={onSubmitHandler}
      handleInputChange={handleInputChange}
      handleStatusChange={handleStatusChange}
      handleGenderChange={handleGenderChange}
    />
  );
};

export default SearchBar;
