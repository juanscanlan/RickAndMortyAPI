import { useParams } from "react-router-dom";

const Search = () => {
  const { searchTerm } = useParams();

  return <div>{searchTerm}</div>;
};

export default Search;
