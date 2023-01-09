# BitNews 📃
#React  
#ReduxToolkit  
#TypeScript


Для заупска программы выполните:
```
npm install
npm start
```

В проекте нужно было реализовать две страницы:
+ Главная новостная страница
+ Страница с выбором темы 

>На первом экране представлена лента новостей. По мере прокрутки новости подгружаются механизмом **infinity scroll**.

Реализовал такую возможность двумя способами: 
+ первый самостоятельно с помощью подключения прослушивателя scroll
```javascript
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
    }, [])
    
    const handleScroll = () => {
        // проверка на конец страницы
        // подгрузка данных
    }
```

+ второй, который и оставил в итоговой версии проетка, с помощью библиотеки **react-infinite-scroll-component**

```javascript
<InfiniteScroll dataLength={array.length}
                next={}// подгрузка данных 
                hasMore={news.hasMore}
                loader={<h4>Loading...</h4>}>
    {
        // новостная лента
    }
</InfiniteScroll>
```

>На втором экране располагаются 3 кнопки, содержащие разные темы. При
нажатии на кнопку «подтягивается» соответствующая тема через API и
изменяет цветовую схему. Настройки темы сохраняются при
перезапуске страницы.



