import React from "react";
import s from "./SectionPage.module.scss";
import sa from "../HomePage.module.scss";
import Data from "../DataCart/Data";

const SectionPage = () => {
  return (
    <div>
      <div className={sa.homepage}>
        <div className="container">
          <div className={s.minContainer}>
            <div className={s.section}>
              <div className={s.section_down}>
                <h1>Featured Courses</h1>{" "}
              </div>
              <br />
              <br />
              <div className={s.section_descr}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                  vitae erat.
                </p>
                <button>VIEW ALL COURSES</button>
              </div>
            </div>
          </div>
        </div>
        <Data />
      </div>
    </div>
  );
};

export default SectionPage;
