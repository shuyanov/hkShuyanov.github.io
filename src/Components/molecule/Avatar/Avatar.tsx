import React from "react";
import styles from "./styles.module.scss";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import hair from "../../../assets/human/hair/hair.svg";
import jacet from "../../../assets/human/jacet/testJacet.svg";
import leg from "../../../assets/human/leg/testLeg.svg";

export const Avatar = () => {
  return (
    <div>
      <div className={styles.buttonContainer}>
        <div className={styles.hair}>
          <button>
            <KeyboardArrowLeftIcon />
          </button>
          <button>
            <ChevronRightIcon />
          </button>
        </div>
        <div className={styles.hair}>
          <button>
            <KeyboardArrowLeftIcon />
          </button>
          <button>
            <ChevronRightIcon />
          </button>
        </div>
        <div className={styles.hair}>
          <button>
            <KeyboardArrowLeftIcon />
          </button>
          <button>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
      <div className={styles.humanContainer}>
        <div className={styles.humanConst}>
          <img className={styles.svgHair} src={hair} />
          <img className={styles.svgJacet} src={jacet} />
          <img className={styles.svgLeg} src={leg} />
        </div>
      </div>
    </div>
  );
};
