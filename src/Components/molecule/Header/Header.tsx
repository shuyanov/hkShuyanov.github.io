import React from "react";
// import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import InputSech from "../../atoms/InputSerch/InputSerch";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.Header}>
        <span className={styles.logoText}>
          <div className={styles.opeColor}>BIM</div>
          <div className={styles.twoColor}>CAMPUS</div>
        </span>
        <div className={styles.links}>
          <Link to="/">Мероприятия</Link>
          <Link to="/">Конкурсы</Link>
          <Link to="/">Точки роста</Link>
          <Link to="/">Проекты</Link>
          <Link to="/">Публикации</Link>
          <Link to="/">Регистрация</Link>
          <Button
            sx={{
              borderRadius: 5,
            }}
            size="small"
            variant="outlined"
            href="#"
          >
            Вход
          </Button>
        </div>
      </div>
      <div>
        <InputSech />
      </div>
    </div>
  );
}

export default App;
