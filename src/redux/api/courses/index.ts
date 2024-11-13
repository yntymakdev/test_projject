import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCourses: build.query<COURSES.CourseRequest, COURSES.CourseResponse>({
      query: () => ({
        url: "/courses",
        method: "GET",
      }),
      providesTags: ["courses"],
    }),
  }),
});

export const { useGetCoursesQuery } = api;
