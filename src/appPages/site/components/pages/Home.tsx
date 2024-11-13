import React from "react";
import HomePage from "./HomePage";
import SectionPage from "./SectionPage/SectionPage";
import About from "./AboutPage/About";
import WorkShop from "./WorkShop/WorkShop";
import Review from "./Review/Review";
import Teach from "./Teaching/Teach";
import Articles from "./Articles/Articles";
import Select from "./Articles/Data/Select";

const Home = () => {
  return (
    <div>
      <HomePage />
      <SectionPage />
      <About />
      <WorkShop />
      <Review />
      <Teach />
      <Articles />
      <Select />
    </div>
  );
};

export default Home;
