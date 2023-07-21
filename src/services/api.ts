import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type PurchaseType = {
  orderId: string
}
export type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurants: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getProduct: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getRestaurantBanner: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseType, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body: body
      })
    })
  })
})

export const {
  useGetFeaturedRestaurantsQuery,
  useGetProductQuery,
  useGetRestaurantBannerQuery,
  usePurchaseMutation
} = api
export default api
