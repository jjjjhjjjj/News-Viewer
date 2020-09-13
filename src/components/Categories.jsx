import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import "./categories.css";

const Categories = memo(() => {
  const categories = [
    { name: "all", text: "전체보기" },
    { name: "business", text: "비즈니스" },
    { name: "entertainment", text: "엔터테인먼트" },
    { name: "health", text: "건강" },
    { name: "science", text: "과학" },
    { name: "sports", text: "스포츠" },
    { name: "technology", text: "기술" },
  ];

  const categoryList = categories.map((c) => (
    <li key={c.name}>
      <NavLink
        exact={c.name === "all" ? true : false}
        to={c.name === "all" ? "/" : `/${c.name}`}
      >
        {c.text}
      </NavLink>
    </li>
  ));

  return (
    <>
      <ul className="category-list">{categoryList}</ul>
    </>
  );
});

export default Categories;
