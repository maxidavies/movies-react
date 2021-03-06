import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  let handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          value={searchText}
          autoFocus
          placeholder="Título"
          onChange={(e) => {
            const value = e.target.value;
            setSearchText(value);
            history.push("/?search=" + value);
          }}
        />
        <FaSearch className={styles.searchButton} />
      </div>
    </form>
  );
}
