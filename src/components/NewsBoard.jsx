import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

import general from "../data/general";
import business from "../data/business";
import entertainment from "../data/entertainment";
import health from "../data/health";
import science from "../data/science";
import sports from "../data/sports";
import technology from "../data/technology";

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {

    let data = [];

    switch (category) {
      case "business":
        data = business;
        break;

      case "entertainment":
        data = entertainment;
        break;

      case "health":
        data = health;
        break;

      case "science":
        data = science;
        break;

      case "sports":
        data = sports;
        break;

      case "technology":
        data = technology;
        break;

      default:
        data = general;
    }

    setArticles(data);

  }, [category]);

  return (
    <div className="container">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">{category}</span> News
      </h2>

      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 col-lg-3 mb-4" key={index}>
            <NewsItem
              author={article.author}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
