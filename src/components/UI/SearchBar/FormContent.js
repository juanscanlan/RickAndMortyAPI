import styles from "./formContent.module.scss";

const FormContent = ({
  inputName,
  onSubmit,
  handleInputChange,
  handleStatusChange,
  handleGenderChange,
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <div className={styles.container__options}>
        <div className={styles.optionsBox}>
          <span className={styles.optionsBox__optionsTag}>Status: </span>
          <select onChange={handleStatusChange}>
            <option value="">All</option>
            <option value="status=alive">Alive</option>
            <option value="status=dead">Dead</option>
            <option value="status=unknown">Unknown</option>
          </select>
        </div>
        <div className={styles.optionsBox}>
          <span className={styles.optionsBox__optionsTag}>Gender: </span>
          <select onChange={handleGenderChange}>
            <option value="">All</option>
            <option value="gender=male">Male</option>
            <option value="gender=female">Female</option>
            <option value="gender=genderless">Genderless</option>
            <option value="gender=unknown">Unknown</option>
          </select>
        </div>
      </div>

      <div className={styles.container__search}>
        <input
          type="text"
          name="characterSearchInput"
          placeholder="Search for a character"
          value={inputName}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default FormContent;
