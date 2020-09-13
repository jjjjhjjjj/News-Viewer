import React from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";

const NewsTemplate = ({ match }) => {
  const category = match.params.category || "all";

  return (
    <>
      <Categories category={category} />
      <NewsList category={category} />
    </>
  );
};

export default NewsTemplate;
