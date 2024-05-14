import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

function App() {
  const currentUrl = window.location.pathname;

  return (
    <div className={styles.headerContainer}>
      <div className={styles.Header}>
        <Link to="/home" className={styles.logoText}>
          <div className={styles.opeColor}>BIM</div>
          <div className={styles.twoColor}>CAMPUS</div>
        </Link>
        <div className={styles.links}>
          <Link
            to="/events"
            className={currentUrl === "/events" ? styles.select : undefined}
          >
            Мероприятия
          </Link>
          <Link to="/">Конкурсы</Link>
          <Link to="/">Точки роста</Link>
          <Link to="/">Проекты</Link>
          <Link
            to="/publications"
            className={
              currentUrl === "/publications" ? styles.select : undefined
            }
          >
            Публикации
          </Link>
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
    </div>
  );
}

export default App;
