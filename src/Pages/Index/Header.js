import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>It's time to get schwifty!</h1>
      <span className={styles.container__subtitle}>
        Click on any character or use the search bar!
      </span>
    </div>
  );
};

export default Header;
