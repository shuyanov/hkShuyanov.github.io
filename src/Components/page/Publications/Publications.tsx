import React from "react";
import Header from "../../molecule/Header/Header";
import { Button } from "@mui/material";
import styles from "./styles.module.scss";

import BitCardPublick from "../../atoms/BitCardPublick/BitCardPublick";
import tr from "../../../assets/width.jpg";
import { EventsNews } from "../../molecule/EventsNews/EventsNews";
import { SubEventsNews } from "../../molecule/SubEventsNews/SubEventsNews";
import { Footer } from "../../molecule/Footer/Footer";

export const Publications = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.buttonContainer}>
        <Button
          sx={{
            borderRadius: 5,
            border: "1px solid #004F98",
            font: "Montserrat Black",
          }}
          size="small"
          variant="outlined"
        >
          Биология
        </Button>{" "}
        <Button
          sx={{
            borderRadius: 5,
            border: "1px solid #004F98",
            font: "Montserrat Black",
          }}
          size="small"
          variant="outlined"
        >
          Физика
        </Button>{" "}
        <Button
          sx={{
            borderRadius: 5,
            border: "1px solid #004F98",
            font: "Montserrat Black",
          }}
          size="small"
          variant="outlined"
        >
          Химия
        </Button>
      </div>
      <EventsNews lable={""} />
      <SubEventsNews lable={"ИЗБРАННЫЕ СТАТЬИ"} />
      <Footer />
    </div>
  );
};
