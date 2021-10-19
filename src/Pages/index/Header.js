import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>It's time to get schwifty!</h1>
    </div>
  );
};

export default Header;
