import * as React from "react";
import styles from "./styles.module.scss";
import InputItem from "../../atoms/IventItem/InputItem";

import cloud from "../../../assets/width.jpg";

type TEventsList = {
  lable: string;
};

export const EventsList = ({ lable }: TEventsList) => {
  return (
    <div className={styles.mainContainer}>
      <h3>{lable}</h3>
      <div className={styles.scrollableContainer}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <InputItem
              img={cloud}
              date={"Мероприятие: 10.11.05"}
              descriptions={"Невероятная история про древних римлян"}
            />
          </li>
          <li className={styles.item}>
            <InputItem
              img={cloud}
              date={"Мероприятие: 10.11.05"}
              descriptions={"Невероятная история про древних римлян"}
            />
          </li>
          <li className={styles.item}>
            <InputItem
              img={cloud}
              date={"Мероприятие: 10.11.05"}
              descriptions={"Невероятная история про древних римлян"}
            />
          </li>
          <li className={styles.item}>
            <InputItem
              img={cloud}
              date={"Мероприятие: 10.11.05"}
              descriptions={"Невероятная история про древних римлян"}
            />
          </li>
          <li className={styles.item}>
            <InputItem
              img={cloud}
              date={"Мероприятие: 10.11.05"}
              descriptions={"Невероятная история про древних римлян"}
            />
          </li>
          <li className={styles.item}>
            <InputItem
              img={cloud}
              date={"Мероприятие: 10.11.05"}
              descriptions={"Невероятная история про древних римлян"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
