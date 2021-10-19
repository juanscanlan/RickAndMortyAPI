import styles from "./rickAndMorty.module.scss";

import Characters from "./Characters";
import Header from "./Header";
import SearchCharacters from "../../components/UI/searchBar/SearchCharacters";

function RickAndMorty() {
  return (
    <div className={styles.container}>
      <Header />
      <SearchCharacters />
      <Characters />
    </div>
  );
}

export default RickAndMorty;
