import React from "react";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import InputSech from "../../atoms/InputSerch/InputSerch";

function App() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.Header}>
        <span className={styles.logoText}>
          <div className={styles.opeColor}>BIM</div>
          <div className={styles.twoColor}>CAMPUS</div>
        </span>
        <div className={styles.links}>
          <Link underline="none">Мероприятия</Link>
          <Link underline="none">Конкурсы</Link>
          <Link underline="none">Точки роста</Link>
          <Link underline="none">Проекты</Link>
          <Link underline="none">Публикации</Link>
          <Link underline="none">Регистрация</Link>
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
