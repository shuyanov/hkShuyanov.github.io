import React from "react";
import map from "../../../assets/bim.svg";
import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.mapContainer}>
      <img src={map} />
    </div>
  );
}

export default App;
