import styles from "./navbar.module.scss";

import Logo from "../../../assets/images/rickAndMortyLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link
        to={{
          pathname: "https://rickandmortyapi.com/",
        }}
        target="_blank"
      >
        <span className={styles.navbar__title}>Docs</span>
      </Link>
      <Link to="/">
        <img className={styles.logo} src={Logo} alt="Rick and Morty Logo" />
      </Link>
      <Link
        to={{
          pathname: "https://github.com/juanscanlan/RickAndMortyAPI",
        }}
        target="_blank"
      >
        <FontAwesomeIcon className={styles.navbar__icon} icon={faGithub} />
      </Link>
    </nav>
  );
};

export default Navbar;
