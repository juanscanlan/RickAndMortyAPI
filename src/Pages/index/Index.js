import styles from "./index.module.scss";

import Characters from "./Characters";
import Header from "./Header";
import SearchBar from "../../components/UI/SearchBar/SearchBar";

function Index({ fetchData }) {
  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
      <Characters fetchData={fetchData} />
    </div>
  );
}

export default Index;
