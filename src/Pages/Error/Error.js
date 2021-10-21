import styles from "./error.module.scss";

import errorImage from "../../assets/images/error/404.jpg";
import { Link } from "react-router-dom";
import SearchBar from "../../components/UI/SearchBar/SearchBar";

const Error = () => {
  return (
    <div className={styles.page}>
      <SearchBar />
      <div className={styles.container}>
        <h3 className={styles.container__return}>
          <Link to="/">Back to Home</Link>
        </h3>
        <h1 className={styles.container__code}>404</h1>
        <span className={styles.container__message}>
          It seems that page does not exist
        </span>
        <img
          className={styles.container__image}
          src={errorImage}
          alt="Mr. Meeseeks on a lonely rock"
        />
      </div>
    </div>
  );
};

export default Error;
