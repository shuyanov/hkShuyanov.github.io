import styles from "./styles.module.scss";
import cloud from "../../../assets/width.jpg";
import BitCardPublick from "../../atoms/BitCardPublick/BitCardPublick";

type TEventsList = {
  lable: string;
};

export const EventsNews = ({ lable }: TEventsList) => {
  return (
    <div className={styles.mainContainer}>
      <h3>{lable}</h3>
      <div className={styles.scrollableContainer}>
        <ul className={styles.list}>
          <div className={styles.newsContainer}>
            <BitCardPublick
              img={cloud}
              date={"ЗАГОЛОВОК СТАТЬИ"}
              descriptions={""}
              size={"big"}
            />
            <div className={styles.gridsContainer}>
              <BitCardPublick
                img={cloud}
                date={"ЗАГОЛОВОК СТАТЬИ"}
                descriptions={""}
                size={"small"}
              />
              <BitCardPublick
                img={cloud}
                date={"ЗАГОЛОВОК СТАТЬИ"}
                descriptions={""}
                size={"small"}
              />
              <BitCardPublick
                img={cloud}
                date={"ЗАГОЛОВОК СТАТЬИ"}
                descriptions={""}
                size={"small"}
              />
              <BitCardPublick
                img={cloud}
                date={"ЗАГОЛОВОК СТАТЬИ"}
                descriptions={""}
                size={"small"}
              />
              <BitCardPublick
                img={cloud}
                date={"ЗАГОЛОВОК СТАТЬИ"}
                descriptions={""}
                size={"small"}
              />
              <BitCardPublick
                img={cloud}
                date={"ЗАГОЛОВОК СТАТЬИ"}
                descriptions={""}
                size={"small"}
              />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
