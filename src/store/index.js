import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { foodSecApi } from './apis/foodSecApi';
import {countryInfoApi} from './apis/countryApi'

export const store = configureStore({
    reducer: {
        [foodSecApi.reducerPath]: foodSecApi.reducer,
        [countryInfoApi.reducerPath]: countryInfoApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(foodSecApi.middleware)
            .concat(countryInfoApi.middleware)
    }
})

setupListeners(store.dispatch)

export { useFetchIPCQuery } from './apis/foodSecApi'
export { useFetchInfoQuery } from './apis/countryApi'
