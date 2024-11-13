import React from "react";
import s from "./Teach.module.scss";
import sa from "../../pages/HomePage.module.scss";
import svg from "./svg/Frame (1).svg";
import Image from "next/image";
const Teach = () => {
  return (
    <div>
      <div className={sa.homepage}>
        <div className="container">
          <div className={s.block}>
            <div className={s.box}>
              <div className={s.image}>
                <Image className={s.image} alt="image" src={svg} width={500} />
              </div>
            </div>
            <div className={s.text}>
              <div className={s.te}>
                <h1>A Passion for Teaching</h1>
              </div>
              <div className={s.des}>
                <p>A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</p>
                <button>ABOUT SKILLZ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teach;
