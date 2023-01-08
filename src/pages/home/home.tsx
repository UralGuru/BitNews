import React from 'react';
import NewsCard from "../../components/newsCard/newsCard";
import styles from './home.module.css';
import {NewsItem} from "../../constants/types";

const data: NewsItem[] = [
    // {
    //     title: "Первая новость",
    //     content: "Первая новость, котороя создана тридцатого марта две тысячи двадцать второго года, новость будет " +
    //         "написна о том-то том-то тогда-то тогда-то",
    //     id: 1012,
    //     createdAt: "2022-03-30T14:44:38.791602",
    //     updatedAt: "2022-03-30T14:44:38.791603"
    // },
    {
        title: "New  news",
        content: "From rmq c808e9fb-07c0-4a1f-9022-01eee285e121",
        id: 1010,
        createdAt: "2022-03-30T14:44:38.791602",
        updatedAt: "2022-03-30T14:44:38.791603"
    },
    {
        title: "Hello3",
        content: "From rmq f92f149e-31fe-4b47-abab-33455718a9a1",
        id: 1009,
        createdAt: "2022-03-30T14:40:24.605012",
        updatedAt: "2022-03-30T14:40:24.605014"
    },
    {
        title: "Hello2",
        content: "From rmq 02f096c9-c91e-4044-b1c9-a06d6532767d",
        id: 1008,
        createdAt: "2022-03-30T12:51:53.097116",
        updatedAt: "2022-03-30T12:51:53.09713"
    },
    {
        title: "Hello",
        content: "From rmq bd58e6d0-8ddc-4939-8299-2817bb1a1b0d",
        id: 1007,
        createdAt: "2022-03-30T12:28:49.861182",
        updatedAt: "2022-03-30T12:28:49.861183"
    },
    {
        title: "Ergonomic exuding database",
        content: "Aliquid est consectetur qui sint quia voluptatem vel porro. Eveniet in ut quo est voluptas vel ullam et. Beatae et atque quam. Amet repellendus voluptatem voluptas nostrum. Voluptatibus error ducimus ipsam dolorem sed officiis recusandae.",
        id: 1005,
        createdAt: "2020-11-02T16:36:46.010477",
        updatedAt: "2020-11-02T16:36:46.010478"
    },
    {
        title: "Automated directional open system",
        content: "Numquam quam quisquam sint magni. Voluptatum unde voluptates dolores perspiciatis. Minus modi et dolores omnis est et quo dicta est. Quisquam ut praesentium magni voluptatem non veniam laboriosam mollitia et. Pariatur debitis ratione aut. Aliquam eius reiciendis aut deleniti impedit ea labore.",
        id: 1004,
        createdAt: "2020-11-02T16:16:10.234185",
        updatedAt: "2020-11-02T16:16:10.234185"
    },
    {
        title: "Extended intermediate analyzer",
        content: "Perspiciatis iusto voluptatem nesciunt ipsum debitis aut autem qui eveniet. Labore nisi a possimus vel fugit consequatur ea dolor nulla. Omnis impedit consequatur debitis nostrum. Quasi eius rerum velit voluptatem ullam expedita consectetur fuga. Ipsum et sit molestiae. Ea dolorem natus omnis nobis.",
        id: 1003,
        createdAt: "2020-11-02T15:21:19.744842",
        updatedAt: "2020-11-02T15:21:19.744843"
    },
    {
        title: "Compatible global protocol",
        content: "Repellat qui quisquam cumque nihil modi sunt. Fugit expedita id est et. Laudantium possimus odio iste dolorum.",
        id: 1002,
        createdAt: "2020-11-02T13:31:32.018892",
        updatedAt: "2020-11-02T13:31:32.018892"
    },
    {
        title: "Stand-alone assymetric orchestration",
        content: "Perferendis quaerat labore modi. Aut rem consectetur dolorum dolores tempore reiciendis dolore ipsa. In vero et quis exercitationem. Temporibus cumque non deserunt perspiciatis repellendus illo. Nobis repudiandae ullam possimus. Dolores et praesentium eveniet excepturi totam omnis et et ducimus.",
        id: 1001,
        createdAt: "2020-11-02T13:28:35.381864",
        updatedAt: "2020-11-02T13:28:35.381864"
    },
    {
        title: "tortor quis turpis sed ante vivamus tortor",
        content: "neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare",
        id: 742,
        createdAt: "2019-09-24T00:00:00",
        updatedAt: "2019-04-07T00:00:00"
    }
]

const Home = () => {
    return (
        <div className={styles.homePage}>
            {data.map(news => <NewsCard key={news.id}
                                        id={news.id} content={news.content} createdAt={news.createdAt}
                                        title={news.title} updatedAt={news.updatedAt}/>)}

        </div>
    );
};

export default Home;
