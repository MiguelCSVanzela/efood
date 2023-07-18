import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Produto, Restaurante } from "../pages/Home";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurants: builder.query<Restaurante[], void>({
      query: () => "restaurantes",
    }),
    getProduct: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    getRestaurantBanner: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`,
    }),
  }),
});

export const {
  useGetFeaturedRestaurantsQuery,
  useGetProductQuery,
  useGetRestaurantBannerQuery,
} = api;
export default api;
