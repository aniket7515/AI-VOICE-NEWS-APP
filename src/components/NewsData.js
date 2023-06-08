
import { useEffect, useState } from 'react';
import { getNews } from '../Service/getNews';

const NewsData = () => {
    const [newsData, setNewsData] = useState([])
    const getAllNews = async () => {
        let data = await getNews();
        setNewsData(data.data.articles)
        // setNewsData(await getNews())
    }
    useEffect(() => {
        getAllNews()
    }, [])
    console.log(newsData?.data?.articles);
    return (
        <div className='main'>
            <h1>Voice news</h1>
            <div className='grid-main'>
                {newsData?.map((news) => {
                    return (
                        <div className='grid-child'>
                            
                             <p> {news?.title} </p>
                        
                        
                        
                        
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default NewsData