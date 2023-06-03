import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const countryInfoApi = createApi({
    reducerPath: 'info',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.hungermapdata.org'
    }),
    endpoints(builder) {
        return {
            fetchInfo: builder.query({
                query: (country) => {
                    return {
                        url: 'v2/info/country',
                        method: 'GET',
                    }
                }
            })
        }
    }
})

export const { useFetchInfoQuery } = countryInfoApi;
export { countryInfoApi };
