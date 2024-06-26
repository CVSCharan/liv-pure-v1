import React from "react";
import mainPageStyles from "./MainPage.module.css";
import Image from "next/image";

const MainPage = () => {
  return (
    <div className={mainPageStyles.mainPage}>
      <div className={mainPageStyles.firstDiv}>
        <Image
          src="/liv-pure-logo.webp"
          alt="Java Burn img 01"
          height={1000}
          width={1000}
          className={mainPageStyles.imgOne}
        />
      </div>
      <div className={mainPageStyles.secondDiv}>
        <div className={mainPageStyles.secondDivContentOne}>
          <div className={mainPageStyles.secondDivContentOneSubDivOne}>
            <h2 className={mainPageStyles.secondDivFirstHeading}>
              Liv Pure is the only product in the world containing our
              proprietary Liver Purification and Liver Fat-Burning Complex, each
              a unique blend of mediterranean plants and super nutrients
              designed to rapidly optimize liver function.
            </h2>
            <h2 className={mainPageStyles.secondDivSecondHeading}>
              Liv Pure is unlike anything you've ever tried or experienced in
              your life before.
            </h2>
          </div>
          <div className={mainPageStyles.secondDivContentOneSubDivTwo}>
            <div
              className={mainPageStyles.secondDivContentOneSubDivTwoContentOne}
            >
              <Image
                src="/liv-pure-buyback-image.webp"
                alt="liv-pure-buyback-image"
                height={600}
                width={600}
                className={mainPageStyles.imgMoneyBack}
              />
            </div>
            <div
              className={mainPageStyles.secondDivContentOneSubDivTwoContentTwo}
            >
              <h2 className={mainPageStyles.secondDivThirdHeading}>
                This product is backed by a 100% money back guarantee for 60
                full days from your original purchase.
              </h2>
              <h2 className={mainPageStyles.secondDivThirdHeading}>
                If you're not totally and completely satisfied with this
                product, your results or your experience in the first 60 days
                from your purchase simply let us know by calling our toll free
                number or dropping us an email and we'll give you a full refund
                within 48 hours of the product being returned.
              </h2>
              <h2 className={mainPageStyles.secondDivThirdHeading}>
                That's right, simply return the product, even empty bottles,
                anytime within 60 days of your purchase and you'll receive a
                full, no questions asked refund (less shipping and handling).
              </h2>
            </div>
          </div>
        </div>
        <div className={mainPageStyles.secondDivContentTwo}>
          <Image
            src="/liv-pure 01.webp"
            alt="Renew img 01"
            height={1000}
            width={1000}
            className={mainPageStyles.imgTwo}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
