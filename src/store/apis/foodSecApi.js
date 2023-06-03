import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const foodSecApi = createApi({
    reducerPath: 'ipc',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.hungermapdata.org'
    }),
    endpoints(builder) {
        return {
            fetchIPC: builder.query({
                query: (country) => {
                    return {
                        url: '/v1/ipc/peaks',
                        method: 'GET',
                    }
                }
            })
        }
    }
})

export const { useFetchIPCQuery } = foodSecApi;
export { foodSecApi };
