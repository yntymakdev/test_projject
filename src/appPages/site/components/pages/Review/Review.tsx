import React from "react";
import s from "./Review.module.scss";
const Review = () => {
  return (
    <div>
      <div className={s.review}>
        <div className="container">
          <div className={s.review_text}>
            <p>
              “Kate’s courses are a game changer. She’s thorough, organized, and explains things in a no-nonsense way
              that makes it easy for anyone—beginners to experts—to learn something from her courses and take their game
              to the next level.”
            </p>
            <div className={s.p}>
              <p>James Brown, Influencer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
