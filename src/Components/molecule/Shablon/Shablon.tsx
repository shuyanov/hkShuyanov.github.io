import styles from "./styles.module.scss";
import { Button } from "@mui/material";

export const Shablon = () => {
  return (
    <div className={styles.shablon}>
      <h2>МЕРОПРИЯТИЕ НЕДЕЛИ</h2>
      <span>
        Тут может быть описание самого яркого предстоящего мероприятия этой
        недели
      </span>
      <Button>перейти</Button>
    </div>
  );
};
