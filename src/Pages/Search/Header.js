import styles from "./header.module.scss";

import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const { searchTerm } = useParams();

  // Split url query into words, eg. name=Rick&status=alive&gender=male => name=Rick, status=alive, gender=male
  const searchTerms = searchTerm.split("&");

  // For each query term, split at the '=' and display as text. eg. name=Rick => name: Rick
  const searchTermsJSX = searchTerms.map((term, index) => (
    <div key={index}>
      <span className={styles.left}>{term.split("=")[0]}: </span>
      <span className={styles.right}>{term.split("=")[1]}</span>
    </div>
  ));

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Showing results for: </h1>
      <div className={styles.container__search}>{searchTermsJSX}</div>
      <h3 className={styles.container__return}>
        <Link to="/">Back to Home</Link>
      </h3>
    </div>
  );
};

export default Header;
