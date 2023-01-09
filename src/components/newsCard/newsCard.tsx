import React from 'react';
import CSS from 'csstype';
import {useAppSelector} from '../../shared/hooks';
import {NewsItem} from '../../constants/types';
import styles from './newsCard.module.css';


const NewsCard = (props: NewsItem) => {
    const themeState = useAppSelector((state) => state.theme)

    const colorTheme: CSS.Properties = {
        backgroundColor: `${themeState.secondColor}`,
        color: `${themeState.textColor}`
    }

    return (
        <div className={styles.news} style={colorTheme}>
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


const dateTranslate = (data: string) => {
    const date = new Date(data);
    return date.toLocaleDateString()
}