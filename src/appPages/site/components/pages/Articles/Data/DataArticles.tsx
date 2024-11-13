"use client";
import React from "react";
import s from "./DataArticles.module.scss";
import svg from "./svg/IMAGE (1).svg";
import Image from "next/image";
import { useGetCoursesQuery } from "@/redux/api/courses";
import { useGetArticlesQuery } from "@/redux/api/articles";
import Select from "./Select";

const DataArticles = () => {
  const { isLoading, data, error } = useGetArticlesQuery();

  // Логируем данные, чтобы увидеть их структуру
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
                      <h1>LEARN MORE</h1>
                    </div>
                  </div>
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

export default DataArticles;
