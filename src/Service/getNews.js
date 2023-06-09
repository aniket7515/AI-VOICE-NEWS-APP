import axios from 'axios'

export function getNews(category){
  const API_KEY=`2441d9140ee14ff0aa831327117d0f3c`
  const API_ENDPOINT=`https://newsapi.org/v2/top-headlines?country=us&category=${category}`

  
        return axios.get(`${API_ENDPOINT}&apiKey=${API_KEY}`)
  

}

