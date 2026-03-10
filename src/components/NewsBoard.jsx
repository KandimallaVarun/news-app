import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    console.log("fetching", url);
    fetch(url)
      .then(r => r.json())
      .then(data => {
        console.log("response", data);
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]);
        }
      })
      .catch(error => {
        console.error("Error fetching articles:", error);
        setArticles([]);
      });
  }, [category]);
  
  return (
    <div className="container">
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        <div className="row">
        {articles.map((article, index) => {
          return (
            <div className="col-md-4 col-lg-3 mb-4" key={index}>
              <NewsItem author={article.author} title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage} />
            </div>
          );
        })}
        </div>
    </div>
  )
}