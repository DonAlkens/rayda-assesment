import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchItems = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://run.mocky.io/v3' }),
    reducerPath: 'fetchItems',
    tagTypes: ['Items'],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/7f02819f-8254-410a-b8af-ab98572bd26b',
        }),
    }),
});

export const { useGetPostsQuery } = fetchItems;
