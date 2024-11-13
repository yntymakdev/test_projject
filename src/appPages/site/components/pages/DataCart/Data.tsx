"use client";
import React from "react";
import s from "./Data.module.scss";
import svg from "./svg/IMAGE (1).svg";
import Image from "next/image";
import { useGetCoursesQuery } from "@/redux/api/courses";

const Data = () => {
  const { isLoading, data, error } = useGetCoursesQuery();

  console.log("API Response:", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <div className="container">
        <div className={s.dataContainer}>
          <div className={s.data}>
            {data && data.length > 0 ? (
              data.map((course: COURSES.CourseResponse) => (
                <div key={course.id} className={s.carta}>
                  <div className={s.box}>
                    <Image className={s.image} alt={course.name} src={course.image} width={333} height={200} />
                    <div className={s.main}>
                      <div className={s.textdata}>
                        <p>{course.name}</p>
                      </div>
                      <div className={s.pDaa}>
                        <p>{course.author}</p>
                      </div>
                      <div className={s.dollar}>${course.price} USD</div>
                      <h1>LEARN MORE</h1>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              ))
            ) : (
              <div>No courses available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
