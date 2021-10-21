import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

import FaceLeft from "../../../assets/images/footer/rickFaceLeft.jpg";
import FaceRight from "../../../assets/images/footer/rickFaceRight.jpg";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <img className={styles.logo} src={FaceRight} alt="Rick and Morty Logo" />

      <span>
        Created by:{" "}
        <Link
          to={{
            pathname: "https://juanscanlan.github.io/",
          }}
          target="_blank"
        >
          Juan Scanlan
        </Link>
      </span>

      <img className={styles.logo} src={FaceLeft} alt="Rick and Morty Logo" />
    </footer>
  );
};

export default Footer;
