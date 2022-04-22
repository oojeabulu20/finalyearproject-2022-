import { configureStore } from "@reduxjs/toolkit"
import expenseSlice from "./reducer"
import {apiSlicing} from "./apiSlicing"

export const store = configureStore({
    reducer: {
        expense: expenseSlice,
        [apiSlicing.reducerPath]:apiSlicing.reducer
    },
    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(apiSlicing.middleware)
})