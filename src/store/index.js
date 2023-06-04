import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { foodSecApi } from './apis/foodSecApi';

export const store = configureStore({
    reducer: {
        [foodSecApi.reducerPath]: foodSecApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(foodSecApi.middleware)
    }
})

setupListeners(store.dispatch)

export { useFetchIPCQuery, useFetchInfoQuery, useFetchHazardQuery } from './apis/foodSecApi'
