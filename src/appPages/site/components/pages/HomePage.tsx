import React from "react";
import s from "./HomePage.module.scss";
import svg from "./svg/Frame.svg";
import Image from "next/image";
const HomePage = () => {
  return (
    <div>
      <div className={s.homepage}>
        <div className="container">
          <div className={s.mainContainer}>
            <div className={s.wrap}>
              <div className={s.wrapUp}>
                <div className={s.homepageMenu}>
                  <p>Featured Course</p>
                </div>
                <div className={s.home}>
                  <h1>
                    Run your own online <br /> learning platform
                  </h1>
                </div>
                <br />
                <div className={s.home_descr}>
                  <p>A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</p>
                </div>
                <br />
                <div className={s.autor}>
                  <p>Kathryn Murphy </p>
                </div>
                <br />
                <div className={s.btn}>
                  <button>Learn More</button>
                </div>
              </div>
              <div className={s.imageDf}>
                <Image className={s.image} width={570} alt="image" src={svg} quality={70} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
