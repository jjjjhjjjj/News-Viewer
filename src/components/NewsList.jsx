import React, { memo, useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Axios from "axios";
import "./newslist.css";

const NewsList = memo(({ category }) => {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await Axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e105dce0debe457b82f5509ad9534c52`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    loadArticle();
  }, [category]);

  if (loading) {
    return (
      <>
        <div>로딩중...</div>
      </>
    );
  }

  if (!articles) {
    return <div>기사가 없습니다.</div>;
  }

  return (
    <ul className="news-list">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </ul>
  );
});

export default NewsList;
