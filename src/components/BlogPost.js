import React, { useState, useEffect } from "react";
import Blog from "../pages/Blog";
import SearchBar from "./SearchBar";
import Loading from "./skeLoading";

function BlogPost(props) {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    console.log(loading);
    setTimeout(() => {
      setloading(true);
    }, 2000);
  }, []);

  const { blogs, Total } = props;
  const [isActive, setIsActive] = useState([
    {
      Grid: true,
    },
    { Row: false },
  ]);

  const [searchBlog, setSearchBlog] = useState("");
  const filteredBlog = blogs.filter((blog) => {
    return (
      blog.date.includes(searchBlog) ||
      blog.story.includes(searchBlog) ||
      blog.tag.includes(searchBlog)
    );
  });

  const blogElements = filteredBlog.map((blog, index) => {
    return <Blog key={index} Format={isActive} blog={blog} />;
  });

  const result = blogElements.length;

  function activeGrid() {
    setIsActive([{ Grid: true }, { Row: false }]);
    setTimeout(() => {
      setloading(true);
    }, 2000);
    setloading(false);
  }

  function activeRow() {
    setIsActive([{ Grid: false }, { Row: true }]);
    setTimeout(() => {
      setloading(true);
    }, 2000);
    setloading(false);
  }

  return (
    <section className="blog py-14 bg-white font-kanit" id="blog">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Our Story
        </h2>
        <p className="mt-2 text-lg text-center text-gray-600">
          เพราะเรื่องราว เราเก็บไว้ได้
        </p>
        <div className="flex flex-row justify-between h-16 items-center mt-10">
          <div className="ml-12">
            <p className="text-medium text-black hidden sm:block">
              Showing
              <span className="font-medium mx-1">1</span>
              to
              <span className="font-medium mx-1">{result}</span>
              of
              <span className="font-medium mx-2">{result}</span>
              results
            </p>
          </div>
          <div className="flex flex-row justify-between sm:justify-center items-center relative">
            <button
              className={`focus:outline-none ${
                isActive[0].Grid ? "cursor-default" : ""
              } `}
              onClick={activeGrid}
              disabled={isActive[0].Grid ? true : false}
            >
              <svg
                className={`w-6 h-6 m-1
                   ${isActive[0].Grid ? "text-red-400" : "text-gray-500"}
                     }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button
              className={`focus:outline-none ${
                isActive[1].Row ? "cursor-default" : ""
              } `}
              onClick={activeRow}
              disabled={isActive[1].Row ? true : false}
            >
              <svg
                className={`w-6 h-6 m-1
                ${isActive[0].Grid ? "text-gray-500" : "text-red-400"}
                  `}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="">
              <SearchBar value={searchBlog} onValueChange={setSearchBlog} />
            </div>
          </div>
        </div>

        <ul
          className={`grid grid-cols-4 gap-8 mt-10 ${
            isActive[0].Grid
              ? "grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 py-10 xl:px-0 px-12"
              : "grid-cols-4 sm:px-12 py-10"
          }  `}
        >
          {!loading ? <Loading w={500} h={900} /> : blogElements}
        </ul>
      </div>
    </section>
  );
}

export default BlogPost;
