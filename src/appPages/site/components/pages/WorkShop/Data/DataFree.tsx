"use client";
import React from "react";
import s from "../Data/DataFree.module.scss";
import { useGetFreeWorkShopsQuery } from "@/redux/api/workshops";

const truncateText = (text: string, wordLimit = 20, charLimit = 100) => {
  const words = text.split(" ");

  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }

  if (text.length > charLimit) {
    return text.slice(0, charLimit) + "...";
  }

  return text;
};

const DataFree = () => {
  const { data, error, isLoading } = useGetFreeWorkShopsQuery();
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <div className="container">
        <div className={s.free}>
          {data && data.length > 0 ? (
            data.map((el) => (
              <div key={el.id} className={s.carta}>
                <div className={s.block}>
                  <h1>{el.name}</h1>
                  <br />
                  <div className={s.des}>
                    <p>{truncateText(el.description)}</p>
                  </div>
                  <br />
                  <div className={s.te}>
                    <h1>Learn More</h1>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No workshops available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataFree;
