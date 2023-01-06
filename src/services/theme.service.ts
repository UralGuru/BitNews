import axios from 'axios';
import {Theme, THEMES} from "../constants/types";

const instance = axios.create({
    baseURL: 'https://frontappapi.dock7.66bit.ru/api/',
})

const getTheme = async (themeName: THEMES) => {
    const response = await instance.get<Theme>(`theme/get?name=${themeName}`);
    return response.data;
};

const ThemeService = {
    getTheme,
};

export default ThemeService;
