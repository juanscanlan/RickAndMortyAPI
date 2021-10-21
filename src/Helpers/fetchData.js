const RICK_AND_MORTY_API_URL = "https://rickandmortyapi.com/api/";

const fetchData = async (url) => {
  // Fetch data from external API
  const res = await fetch(RICK_AND_MORTY_API_URL + url);
  const data = await res.json();

  // Return Data
  return data;
};

export default fetchData;
