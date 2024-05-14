import Header from "../../molecule/Header/Header";
import { Shablon } from "../../molecule/Shablon/Shablon";
import { EventsList } from "../../molecule/EventsList/EventsList";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./styles.module.scss";
import { SendInput } from "../../molecule/SendInput/SendInput";
import { Footer } from "../../molecule/Footer/Footer";

export const EventsPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <Header />
        <Shablon />
      </div>
      <EventsList lable={"Предстоящие мероприятия"} />
      <EventsList lable={"Прошедшие мероприятия"} />
      <div className={styles.info}>
        <div className={styles.infoOrganaiz}>
          <h3>ХОТИТЕ ОРГАНИЗОВАТЬ СВОЕ МЕРОПРИЯТИЕ?</h3>
          <span>Тогда смело заполняйте анкету!</span>
        </div>
        <div className={styles.container}>
          <SendInput />
          <Link to="/home">
            <Button
              sx={{
                borderRadius: 5,
                border: "1px solid #004F98",
                font: "Montserrat Black",
                fontSize: "16px",
              }}
              size="large"
              variant="outlined"
            >
              Отправить
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
