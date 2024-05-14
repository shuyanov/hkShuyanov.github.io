import TextField from "@mui/material/TextField";
import styles from "./styles.module.scss";

export const RegisterInput = () => {
  return (
    <>
      <div className={styles.registerInput}>
        <TextField id="filled-basic" label="Имя" variant="filled" />
        <TextField id="filled-basic" label="Фамилия" variant="filled" />
        <TextField id="filled-basic" label="Отчество" variant="filled" />
        <TextField id="filled-basic" label="ВУЗ" variant="filled" />
        <div className={styles.subInput}>
          <TextField id="filled-basic" label="Курс" variant="filled" />
          <TextField
            className={styles.inputGrupp}
            id="filled-basic"
            label="Группа"
            variant="filled"
          />
        </div>
      </div>
    </>
  );
};
