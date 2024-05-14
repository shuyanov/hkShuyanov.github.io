import map from "../../../assets/bim.svg";
import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.mapContainer}>
      <pre>
        Кампус "БИМ" – это масштабный проект по созданию в Ивановской области
        научно-образовательного пространства мирового уровня, который позволит
        вузам вести совместную научную, исследовательскую и образовательную
        деятельность.
      </pre>
      <img src={map} />
    </div>
  );
}

export default App;
