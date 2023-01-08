import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlices';
import themeReducer from './slices/themeSlices';

const store = configureStore({
    reducer: {
        news: newsReducer,
        theme: themeReducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;