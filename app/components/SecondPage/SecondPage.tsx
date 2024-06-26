import React from "react";
import secondPageStyles from "./SeconPage.module.css";
import Image from "next/image";
import { ingredents } from "./SecondPageFun";
import ButtonComp from "../Button/Button";

const SecondPage = () => {
  return (
    <div className={secondPageStyles.secondPage}>
      <div className={secondPageStyles.firstDiv}>
        <h2 className={secondPageStyles.firstDivHeadingOne}>
          Inside every Liv Pure capsule you'll find:
        </h2>
        <h2 className={secondPageStyles.firstDivHeadingTwo}>
          5 super-nutrients designed to support the bodies detoxification
          process and support the health of your liver, and dramatically
          maintain your overall health and energy.
        </h2>
      </div>
      <div className={secondPageStyles.secondDiv}>
        {ingredents.map((item) => (
          <div className={secondPageStyles.secondDivContent} key={item.id}>
            <h2 className={secondPageStyles.secondDivContentHeadingOne}>
              {item.name}
            </h2>
            <Image
              src={item.img}
              alt={item.img}
              height={200}
              width={200}
              className={secondPageStyles.imgOne}
            />
            <h2 className={secondPageStyles.secondDivContentHeadingTwo}>
              {item.message}
            </h2>
          </div>
        ))}
      </div>
      <ButtonComp />
    </div>
  );
};

export default SecondPage;
