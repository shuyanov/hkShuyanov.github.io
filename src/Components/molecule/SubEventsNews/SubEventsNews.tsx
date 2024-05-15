import styles from "./styles.module.scss";
import cloud from "../../../assets/width.jpg";
import BitCardPublick, {
  TTags,
} from "../../atoms/BitCardPublick/BitCardPublick";

type TEventsList = {
  lable: string;
};

const arr: TTags[] = [{ title: "Искусство" }];

export const SubEventsNews = ({ lable }: TEventsList) => {
  return (
    <div className={styles.mainContainer}>
      <h3>{lable}</h3>
      <div className={styles.scrollableContainer}>
        <ul className={styles.list}>
          <div className={styles.newsContainer}>
            <BitCardPublick
              img={cloud}
              date={"Конкурс лучший рисунок"}
              descriptions={""}
              size={"small"}
              tags={arr}
            />
            <BitCardPublick
              img={cloud}
              date={"Конкурс лучший рисунок"}
              descriptions={""}
              size={"small"}
              tags={arr}
            />
            <BitCardPublick
              img={cloud}
              date={"Конкурс лучший рисунок"}
              descriptions={""}
              size={"small"}
              tags={arr}
            />
            <BitCardPublick
              img={cloud}
              date={"Конкурс лучший рисунок"}
              descriptions={""}
              size={"small"}
              tags={arr}
            />
            <BitCardPublick
              img={cloud}
              date={"Конкурс лучший рисунок"}
              descriptions={""}
              size={"small"}
              tags={arr}
            />
            <BitCardPublick
              img={cloud}
              date={"Конкурс лучший рисунок"}
              descriptions={""}
              size={"small"}
              tags={arr}
            />
            <BitCardPublick
              img={cloud}
              date={"Конкурс лучший рисунок"}
              descriptions={""}
              size={"small"}
              tags={arr}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};
