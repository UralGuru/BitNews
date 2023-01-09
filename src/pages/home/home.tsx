import React, {useEffect, useState} from 'react';
import NewsCard from "../../components/newsCard/newsCard";
import styles from './home.module.css';
import {NewsItem} from "../../constants/types";
import {useAppDispatch, useAppSelector} from "../../shared/hooks";
import {getNewsThunk, incrementPage} from "../../store/slices/newsSlices";
import InfiniteScroll from "react-infinite-scroll-component";
import {useSelector} from "react-redux";


const Home = () => {

    const dispatch = useAppDispatch();
    const theme = useAppSelector((state)=> state.theme)
    const newsState = useAppSelector((state) => state.news)
    const dataNewsArray: NewsItem[] = Object.assign([], Object.values(newsState.newsItems))

    useEffect(() => {
        dispatch(getNewsThunk())
    }, [])

    useEffect(()=>{
        document.body.style.backgroundColor = theme.mainColor
    },[theme.id])



    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
            dispatch(incrementPage())
            dispatch(getNewsThunk())
        }

    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    },[])

    return (
        <div className={styles.homePage}>

            {dataNewsArray.map(news => <NewsCard key={news.id}
                                                 id={news.id}
                                                 title={news.title}
                                                 content={news.content}
                                                 createdAt={news.createdAt}
                                                 updatedAt={news.updatedAt}/>)}
            {/*<InfiniteScroll*/}
            {/*    dataLength={dataNewsArray.length}*/}
            {/*    next={() => {*/}
            {/*        dispatch(incrementPage())*/}
            {/*        dispatch(getNewsThunk())*/}
            {/*    }}*/}
            {/*    hasMore={newsState.hasMore}*/}
            {/*    loader={<h4>Loading...</h4>}*/}
            {/*>*/}
            {/*    {dataNewsArray.map(news => <NewsCard key={news.id}*/}
            {/*                                         id={news.id}*/}
            {/*                                         title={news.title}*/}
            {/*                                         content={news.content}*/}
            {/*                                         createdAt={news.createdAt}*/}
            {/*                                         updatedAt={news.updatedAt}/>)}*/}
            {/*</InfiniteScroll>*/}
        </div>
    );
};

export default Home;
