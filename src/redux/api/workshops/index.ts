import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getFreeWorkShops: build.query<WORKSHOPS.WorkRequest, WORKSHOPS.WorkResponse>({
      query: () => ({
        url: "/freeworkshops/",
        method: "GET",
      }),
      providesTags: ["freeworkshops"],
    }),
  }),
});

export const { useGetFreeWorkShopsQuery } = api;
