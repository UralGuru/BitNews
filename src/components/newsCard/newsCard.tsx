import React from 'react';
import styles from './newsCard.module.css'
import {NewsItem} from "../../constants/types";

const dateTranslate = (data: string) => {
    const date = new Date(data);
    return date.toLocaleDateString()
}


const NewsCard = (props: NewsItem) => {
    return (
        <div className={styles.news}>
            <div className={styles.newsTitleDate}>
                <div className={styles.newsTitle}>{props.title}</div>
                <div className={styles.newsDate}>{dateTranslate(props.createdAt)}</div>
            </div>
            <div className={styles.newsContent}>
                {props.content}
            </div>
        </div>
    );
};

export default NewsCard;
