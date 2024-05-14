import React, { useState } from "react";
import styles from "./styles.module.scss";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import hair from "../../../assets/human/hair/hair.svg";
import hairTwo from "../../../assets/human/hair/hair2.svg";
import hairThird3 from "../../../assets/human/hair/hair3T.svg";

import jacet from "../../../assets/human/jacet/testJacet.svg";
import jacetT from "../../../assets/human/jacet/jac2.svg";
import jacetTh from "../../../assets/human/jacet/jac3.svg";

import leg from "../../../assets/human/leg/testLeg.svg";

export const Avatar = () => {
  const [currentHairIndex, setCurrentHairIndex] = useState(0);
  const [currentJacetIndex, setCurrentJacetIndex] = useState(0);
  // const [currentLegIndex, setCurrentLegIndex] = useState(0);

  const imagesHair = [hair, hairTwo, hairThird3];
  const imagesJacet = [jacet, jacetT, jacetTh];

  const changeImage = (
    currentIndex: number,
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
    images: string[],
    direction: "prev" | "next"
  ) => {
    setCurrentIndex((prevIndex) =>
      direction === "prev"
        ? prevIndex === 0
          ? images.length - 1
          : prevIndex - 1
        : prevIndex === images.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <div>
      <div className={styles.buttonContainer}>
        <div className={styles.hair}>
          <button
            onClick={() =>
              changeImage(
                currentHairIndex,
                setCurrentHairIndex,
                imagesHair,
                "prev"
              )
            }
          >
            <KeyboardArrowLeftIcon />
          </button>
          <button
            onClick={() =>
              changeImage(
                currentHairIndex,
                setCurrentHairIndex,
                imagesHair,
                "next"
              )
            }
          >
            <ChevronRightIcon />
          </button>
        </div>
        <div className={styles.hair}>
          <button
            onClick={() =>
              changeImage(
                currentJacetIndex,
                setCurrentJacetIndex,
                imagesJacet,
                "next"
              )
            }
          >
            <KeyboardArrowLeftIcon />
          </button>
          <button
            onClick={() =>
              changeImage(
                currentJacetIndex,
                setCurrentJacetIndex,
                imagesJacet,
                "prev"
              )
            }
          >
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
          <img className={styles.svgHair} src={imagesHair[currentHairIndex]} />
          <img
            className={styles.svgJacet}
            src={imagesJacet[currentJacetIndex]}
          />
          <img className={styles.svgLeg} src={leg} />
        </div>
      </div>
    </div>
  );
};
