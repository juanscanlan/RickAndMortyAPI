import styles from "./rickAndMorty.module.scss";

import Characters from "./Characters";
import Header from "./Header";

function RickAndMorty() {
  return (
    <div className={styles.container}>
      <Header />
      <Characters />
    </div>
  );
}

export default RickAndMorty;
