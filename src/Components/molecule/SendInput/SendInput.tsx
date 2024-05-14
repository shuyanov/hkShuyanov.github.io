import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./styles.module.scss";

export const SendInput = () => {
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
        <TextField
          id="filled-basic"
          label="Дата проведления мероприятия"
          variant="filled"
        />
        <TextField
          multiline
          id="filled-basic"
          label="Описание мероприятия"
          variant="filled"
          rows={5}
          className={styles.bigInput}
        />
      </div>
    </>
  );
};
