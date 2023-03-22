import { configureStore } from "@reduxjs/toolkit";
import { fetchItems } from "./setup";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        [fetchItems.reducerPath]: fetchItems.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fetchItems.middleware),
})
setupListeners(store.dispatch)