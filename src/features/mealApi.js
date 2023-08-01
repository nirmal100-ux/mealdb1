import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const mealApi = createApi({
  reducerPath: 'mealApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/' }),
  endpoints: (builder) => ({

    getCategoryFood: builder.query({
      query: () => ({
        url: '/categories.php',
        method: 'GET'
      })

    }),

    mealBYID: builder.query({
      query: (query) => ({
        url: '/filter.php',
        method: 'GET',
        params: {
          c: query
        }
      })

    }),


    getRandomFood: builder.query({
      query: () => ({
        url: '/random.php',
        method: 'GET'
      })

    }),
    searchMeal: builder.query({
      query: (search) => ({
        url: '/search.php',
        method: 'GET',
        params: {
          s: search
        }
      })

    }),
    mealId: builder.query({
      query: (query) => ({
        url: '/lookup.php',
        method: 'GET',
        params: {
          i: query
        }
      })

    }),



  }),






});

export const { useGetCategoryFoodQuery, useMealBYIDQuery, useGetRandomFoodQuery, useMealIdQuery, useSearchMealQuery } = mealApi;