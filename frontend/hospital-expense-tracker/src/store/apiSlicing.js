import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = 'http://localhost:5555'

export const apiSlicing = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => '/api/category',
            providesTags:["categories"]
        }),
        getLabels: builder.query({
            query: () => '/api/labels',
            providesTags:["transaction"]
        }),
        addTransaction: builder.mutation({
            query: (initialTransaction) => ({
                url: "/api/transaction",
                method: "POST",
                body:initialTransaction
            }),
            invalidatesTags:["transaction"]
        }),
        deleteTransaction: builder.mutation({
            query: recordId => ({
                url: "/api/transaction",
                method: "DELETE",
                body:recordId
            }),
            invalidatesTags:["transaction"]
        })
    })
})

export default apiSlicing