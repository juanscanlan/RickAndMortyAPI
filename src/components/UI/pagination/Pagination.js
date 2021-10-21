import styles from "./pagination.module.scss";
import { useState } from "react";

const Pagination = (props) => {
  const { handlePage } = props.data;
  const pageCount = props.pageCount;

  const [currentPage, setCurrentPage] = useState(1);

  const onClickHandler = (event) => {
    let pageNumberClicked = event.target.value;

    handlePage(pageNumberClicked);
    setCurrentPage(pageNumberClicked);
  };

  const paginationJSX = [];
  for (let i = 1; i <= pageCount; i++) {
    // Show 2 pagination buttons to the left and right of the curreny page
    if ((i >= currentPage - 2) & (i <= currentPage + 2)) {
      paginationJSX.push(
        <li
          className={i === currentPage ? styles.active : ""}
          key={i}
          value={i}
          onClick={onClickHandler}
        >
          {i}
        </li>
      );
    } // Show first 2 pagination buttons and last two pagination buttons
    else if ((i >= pageCount - 1) | (i <= 2)) {
      paginationJSX.push(
        <li
          className={i === currentPage ? styles.active : ""}
          key={i}
          value={i}
          onClick={onClickHandler}
        >
          {i}
        </li>
      );
    } // Create a '...' element for the ith number in between the elements rendered by the above logic
    else if (
      (i ===
        currentPage + Math.floor((pageCount - 1 - (currentPage + 2)) / 2)) |
      (i === Math.floor((currentPage - 1) / 2))
    ) {
      paginationJSX.push(
        <li
          className={i === currentPage ? styles.active : ""}
          key={i}
          value={i}
          onClick={onClickHandler}
        >
          ...
        </li>
      );
    }
  }

  return <div className={styles.container}>{paginationJSX}</div>;
};

export default Pagination;
