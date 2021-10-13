import React, { useState } from "react";
import styles from './Styles/SearchBar.module.css';


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        className={styles.input}
        type="text"
        placeholder={"Buscar ciudad..."}
        value={city}
        onChange={e => setCity(e.target.value)
        }
      />
    </form>
  );
}
