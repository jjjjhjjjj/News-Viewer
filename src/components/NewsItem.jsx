import React, { memo } from "react";

const NewsItem = memo(({ article }) => {
  const { title, description, urlToImage, url } = article;
  return (
    <li>
      <a href={url}>
        <div className="img-box">
          <img
            src={urlToImage || "https://via.placeholder.com/160"}
            alt="기사 이미지"
          />
        </div>
        <div className="content-box">
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
});

export default NewsItem;
