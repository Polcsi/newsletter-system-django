import React from "react";
import ArticleList from "./ArticleList";
import Categories from "./Categories";

const Home = () => {
  return (
    <React.Fragment>
      <Categories />
      <ArticleList />
    </React.Fragment>
  );
};

export default Home;
