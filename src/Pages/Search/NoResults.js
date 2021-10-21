import styles from "./noResults.module.scss";

import noResultsImg from "../../assets/images/error/404.jpg";

const NoResults = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.container__message}>No characters found</h3>
      <img
        className={styles.container__img}
        src={noResultsImg}
        alt="Mr. Meeseeks on a lonely rock"
      />
    </div>
  );
};

export default NoResults;
