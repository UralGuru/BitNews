import axios from 'axios';
import {GetNewsArgs, NewsItem} from "../constants/types";

const instance = axios.create({
    baseURL: 'https://frontappapi.dock7.66bit.ru/api/',
})

const getPosts = async (props: GetNewsArgs) => {
    const response = await instance.get<NewsItem[]>(`news/get?page=${props.page}&count=${props.count}`);
    return response.data;
};

const PostService = {
    getPosts,
};

export default PostService;

