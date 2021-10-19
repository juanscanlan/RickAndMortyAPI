import styles from "./navbar.module.scss";

import Logo from "../../../assets/images/rickAndMortyLogo.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/" className={styles.navbar}>
      <div>
        <img className={styles.logo} src={Logo} alt="Rick and Morty Logo" />
      </div>

      <div>Sort</div>
    </Link>
  );
};

export default Navbar;
