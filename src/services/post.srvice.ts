import axios from 'axios';
import {NewsItem} from "../constants/types";

const instance = axios.create({
    baseURL: 'https://frontappapi.dock7.66bit.ru/api/',
})

const getPosts = async () => {
    const response = await instance.get<NewsItem[]>('news/get?page=1&count=10');
    return response.data;
};

const PostService = {
    getPosts,
};

export default PostService;
