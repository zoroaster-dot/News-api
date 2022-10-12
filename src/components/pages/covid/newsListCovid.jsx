import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../molekuls/Card/Card";
import { fetchNews } from "../../../features/news/covid/newsSliceCovid";

const NewsListCovid = () => {
  const dispatch = useDispatch();
  const allNews = useSelector((state) => state.articles.entities);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  console.log(allNews);

  return (
    <>
      <div className="mx-6">
        <h1 className="text-2xl my-2">Covid News</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2 w-68 m-3">
        {allNews.map((news, index) => {
          return (
            <div key={index} className="border-1 border-gray-700/30 rounded">
              <Card
                source={news.source.name}
                Image={news.urlToImage}
                titleImg={news.title}
                title={news.title}
                author={news.author}
                description={news.description}
                url={news.url}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsListCovid;