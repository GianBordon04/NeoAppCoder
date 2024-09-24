import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_FIREBASE } from '../firebase/database'

export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:URL_FIREBASE}),
    tagTypes:["userImage","userLocation"],
    endpoints:(builder) => ({
        getCategories: builder.query({
            query: () => "categories.json"
        }),
        getProducts: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
              console.log("Raw response from Firebase:", response); 
              if (!response) {
                console.error("No products found for this category"); 
                return [];
              }
              const data = Object.values(response);
              console.log("Transformed data:", data); 
              return data;
            }
          }),
          
        getProduct:builder.query({
            query:(id) => `/products/${id}.json`
        })

    })
})

export const {  useGetCategoriesQuery, 
                useGetProductsQuery, 
                useGetProductQuery
} = shopApi
