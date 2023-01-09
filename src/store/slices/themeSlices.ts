import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit';
import PostService from '../../services/post.srvice';
import {GetNewsArgs, THEMES} from "../../constants/types";
import ThemeService from "../../services/theme.service";


const localStorageTheme = JSON.parse(localStorage.getItem('theme') as string)
const INITIAL_STATE = {
    id: localStorageTheme?.id ?? NaN,
    title: localStorageTheme?.title ?? '',
    name: localStorageTheme?.name ?? '',
    mainColor: localStorageTheme?.mainColor ?? '',
    secondColor: localStorageTheme?.secondColor ?? '',
    textColor: localStorageTheme?.textColor ?? ''
};

export const getThemeThunk = createAsyncThunk(
    'theme/getTheme',
    async (theme:string, {rejectWithValue}) => {
        try {
            const data = await ThemeService.getTheme(theme);
            return data ;
        } catch (error: any) {
            return rejectWithValue(await error.json());
        }
    }
);

const themeSlice = createSlice({
    name: 'theme',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getThemeThunk.fulfilled, (state, action) => {
                localStorage.setItem('theme', JSON.stringify(action.payload))
                state.id = action.payload.id
                state.name = action.payload.name
                state.title = action.payload.title
                state.mainColor = action.payload.mainColor
                state.secondColor = action.payload.secondColor
                state.textColor = action.payload.textColor

            })
            .addCase(getThemeThunk.rejected, (state, action) => {
                console.error('Error in getNewsThunk')
            });
    },
});

export const {} = themeSlice.actions;
export default themeSlice.reducer;
