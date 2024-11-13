import React from "react";
import s from "./About.module.scss";
import sa from "../HomePage.module.scss";
import Image from "next/image";
import svg from "./svg/IMAGE (2).svg";
const About = () => {
  return (
    <div>
      <div className={sa.homepage}>
        <div className="container">
          <div className={s.aboutPage}>
            <div className={s.about}>
              <div className={s.block}>
                <Image className={s.image} src={svg} alt="image" width={720} height={524} />
                <div className={s.box}>
                  <br />
                  <br />
                  <div className={s.box_qw}>
                    <div className={s.text}>
                      <h1>
                        Get personalized learning <br /> recommendations
                      </h1>
                    </div>
                    <br />
                    <br />
                    <div className={s.pa}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis, lectus magna fringilla urnaLorem ipsum dolor sit amet.
                      </p>
                      <br />
                      <br />
                      <button>CONTACT US</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
