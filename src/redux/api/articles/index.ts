import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query<WORKSHOPS.WorkRequest, WORKSHOPS.WorkResponse>({
      query: () => ({
        url: "/articles/",
        method: "GET",
      }),
      providesTags: ["articles"],
    }),
  }),
});

export const { useGetArticlesQuery } = api;
