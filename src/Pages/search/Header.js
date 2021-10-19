import styles from "./header.module.scss";

import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const { searchTerm } = useParams();

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>
        Showing results for:{" "}
        <span className={styles.container__search}>{searchTerm}</span>
      </h1>

      <h3 className={styles.container__return}>
        <Link to="/">Back to Home</Link>
      </h3>
    </div>
  );
};

export default Header;
