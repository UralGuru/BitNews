import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit';
import PostService from '../../services/post.srvice';
import {GetNewsArgs} from "../../constants/types";

const INITIAL_STATE = {
    newsItems: [],
    page: 1,
    count: 10,
    hasMore: true
};

export const getNewsThunk = createAsyncThunk(
    'news/getNews',
    async (_, {getState, rejectWithValue}) => {
        const state: any = getState();
        try {
            const data = await PostService.getPosts({page: state.news.page, count: state.news.count});
            return data ;
        } catch (error: any) {
            return rejectWithValue(await error.json());
        }
    }
);

const newsSlice = createSlice({
    name: 'news',
    initialState: INITIAL_STATE,
    reducers: {
        incrementPage: (state) => {
            state.page += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNewsThunk.fulfilled, (state, action) => {
                state.newsItems.push(...action.payload as [])
            })
            .addCase(getNewsThunk.rejected, (state, action) => {
                console.error('Error in getNewsThunk')
            });
    },
});

export const { incrementPage } = newsSlice.actions;
export default newsSlice.reducer;
