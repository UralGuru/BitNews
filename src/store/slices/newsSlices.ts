import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PostService from '../../services/post.srvice';

const INITIAL_STATE = {
    newsItems: {}
};

export const getNewsThunk = createAsyncThunk(
    'news/getNews',
    async (_, thunkAPI) => {
        try {
            const data = await PostService.getPosts();
            return data ;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(await error.json());
        }
    }
);

const newsSlice = createSlice({
    name: 'news',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNewsThunk.fulfilled, (state, action) => {
                state.newsItems = action.payload;
            })
            .addCase(getNewsThunk.rejected, (state, action) => {
                console.error('Error in getNewsThunk')
            });
    },
});

export default newsSlice.reducer;