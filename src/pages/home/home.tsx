import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getNewsThunk, incrementPage } from '../../store/slices/newsSlices';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import NewsCard from '../../components/newsCard/newsCard';
import { NewsItem } from '../../constants/types';
import styles from './home.module.css';


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

    return (
        <div className={styles.homePage}>
            <InfiniteScroll
                dataLength={dataNewsArray.length}
                next={() => {
                    dispatch(incrementPage())
                    dispatch(getNewsThunk())
                }}
                hasMore={newsState.hasMore}
                loader={<h4>Loading...</h4>}
            >
                {dataNewsArray.map(news => <NewsCard key={crypto.randomUUID()}
                                                     id={news.id}
                                                     title={news.title}
                                                     content={news.content}
                                                     createdAt={news.createdAt}
                                                     updatedAt={news.updatedAt}/>)}
            </InfiniteScroll>
        </div>
    );
};

export default Home;
