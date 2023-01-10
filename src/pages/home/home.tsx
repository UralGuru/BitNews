import React, {useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import {PullDownContent, PullToRefresh, RefreshContent, ReleaseContent} from 'react-js-pull-to-refresh';
import {getNewsThunk, incrementPage, updateNews} from "../../store/slices/newsSlices";
import {useAppDispatch, useAppSelector} from "../../shared/hooks";
import NewsCard from "../../components/newsCard/newsCard";
import {NewsItem} from "../../constants/types";
import styles from './homeScroll.module.css';


const Home = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state)=> state.theme)
    const newsState = useAppSelector((state) => state.news)
    const dataNewsArray: NewsItem[] = Object.assign([], Object.values(newsState.newsItems))

    const onRefresh = () =>{
        return new Promise((resolve) => {
            setTimeout(resolve, 200);
            dispatch(updateNews())
            dispatch(getNewsThunk())
        })
    }

    useEffect(() => {
        dispatch(getNewsThunk())
    }, [])

    useEffect(()=>{
        document.body.style.backgroundColor = theme.mainColor
    },[theme.id])

    return (
        <div className={styles.homePage}>
            <PullToRefresh
                pullDownContent={<PullDownContent />}
                releaseContent={<ReleaseContent />}
                refreshContent={<RefreshContent />}
                pullDownThreshold={200}
                onRefresh={onRefresh}
                triggerHeight={40}
                backgroundColor={theme.mainColor}
            >
                <div className={styles.basicContainer} id="basic-container">
                    <div className={styles.basicLabel} id="basic-label" onClick={onRefresh}>потяни🙃нажми</div>
                </div>
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
            </PullToRefresh>

        </div>
    );
};

export default Home;
