import React from "react";
import s from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={s.hero}>
      <div className="container">
        <div className={s.mainHero}>
          <p>One week only—50% off all courses with code 50OFF at checkout </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
