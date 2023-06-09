
import { useEffect, useState } from 'react';
import { getNews } from '../Service/getNews';
import moment from 'moment'
const NewsData = () => {
    const [newsData, setNewsData] = useState([])
    const [selectOption, setSelectOption]=useState('')
    const getAllNews = async () => {
        let data = await getNews(selectOption);
        setNewsData(data.data.articles)
        // setNewsData(await getNews())
    }
    const selectCategory=(event)=>{
        setSelectOption(event.target.value);
    }

    useEffect(() => {
        getAllNews()
    }, [selectOption])
    console.log(newsData?.data?.articles);
    return (
        <div className='main'>
            <h1>Voice news</h1>
            <label for="cars">Choose a category:</label>
            <div className='select'>
                <select className='select-box' name="category" id="category" onChange={selectCategory} >
                    <option value="general">General</option>
                    <option value="health">Health</option>
                    <option value="business">Business</option>
                    <option value="sports">Sports</option>
                </select>
            </div>
            <div className='grid-main'>
                {newsData?.map((news) => {
                    return (
                        <div className='grid-child'>
                            <img className='news-image' src={news?.urlToImage} alt="" />
                            <p className='news-title'> {news?.title} </p>
                            <p className='news-content'> {news?.content} </p>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='news-author'>Author: {news?.author ? news?.author : 'Author name not available'} </p>
                                <p className='news-date'>Date: {moment(news?.publishedAt).format('LL')}</p>
                            </div>
                            <a href={news?.url} target='_blank'>Read More..</a>




                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default NewsData