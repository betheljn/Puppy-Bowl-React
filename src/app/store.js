import { Api } from '../API/api' 
import { configureStore } from "@reduxjs/toolkit";
import playerSlice from '../components/playerSlice';

export const store = configureStore ({
    reducer: {
        [Api.reducerPath]: Api.reducer,
        players: playerSlice 
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware)
});
