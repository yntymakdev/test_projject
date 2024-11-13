import { imageOptimizer } from "next/dist/server/image-optimizer";
import React from "react";

import s from "./WorkShop.module.scss";
import Data from "../DataCart/Data";
import DataFree from "./Data/DataFree";
const WorkShop = () => {
  return (
    <div>
      <div className={s.WorkShop}>
        <div className="container">
          <div className={s.work}>
            <div className={s.free}>
              <h1>Upcoming Free Workshops</h1>
            </div>
            <br />
            <br />
            <div className={s.workshop_des}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
                erat.
              </p>
              <br />
              <br />
              <button>View All Workshops</button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <DataFree />
        </div>
      </div>
    </div>
  );
};

export default WorkShop;
