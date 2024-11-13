import React from "react";
import s from "./Select.module.scss";
const Select = () => {
  return (
    <div className={s.phone}>
      <div className="container">
        <div className={s.block}>
          <div className={s.text}>
            <h1>You have the power to define your future.</h1>
          </div>
          <br />
          <br />
          <br />
          <div className={s.another}>
            <div className={s.in}>
              <input className={s.input} type="text" placeholder="EMAIL ADRES" />
            </div>
            <div className={s.btn}>
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
