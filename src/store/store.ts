import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlices';
import newsReducer from './slices/newsSlices';


const store = configureStore({
    reducer: {
        news: newsReducer,
        theme: themeReducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;