import styles from "./error.module.scss";

import errorImage from "../../assets/images/error/404.jpg";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import SearchCharacters from "../../components/UI/searchBar/SearchCharacters";

const Error = () => {
  const { errorCode } = useParams();

  const errorJSX = (
    <h1 className={styles.container__code}>
      {errorCode === "404" && errorCode}
      {errorCode === "500" && errorCode}
    </h1>
  );

  const messageJSX = (
    <span className={styles.container__message}>
      {errorCode === "404" && "It seems that character does not exist"}
      {errorCode === "500" && "API Server Error"}
    </span>
  );

  return (
    <div className={styles.page}>
      <SearchCharacters />
      <div className={styles.container}>
        <h3 className={styles.container__return}>
          <Link to="/">Back to Home</Link>
        </h3>
        {errorJSX}
        {messageJSX}
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
