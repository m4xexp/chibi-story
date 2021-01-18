import React, { useState } from "react";
import Blog from "../pages/Blog";
import SearchBar from "./SearchBar";

function BlogPost(props) {
  const { blogs, Total } = props;
  console.log(blogs);
  const [searchBlog, setSearchBlog] = useState("");
  const filteredBlog = blogs.filter((blog) => {
    return (
      blog.date.includes(searchBlog) ||
      blog.story.includes(searchBlog) ||
      blog.tag.includes(searchBlog)
    );
  });

  const blogElements = filteredBlog.map((blog, index) => {
    return <Blog key={index} blog={blog} />;
  });

  const result = blogElements.length;

  return (
    <section className="blog py-14 bg-white font-kanit" id="blog">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Our Story
        </h2>
        <p className="mt-2 text-lg text-center text-gray-600">
          เพราะเรื่องราว เราเก็บไว้ได้
        </p>
        <div className="flex flex-row justify-between h-16 items-center ">
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
            <svg
              className="w-6 h-6 m-1"
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
            <svg
              className="w-6 h-6 m-1"
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
            <div className="">
              <SearchBar value={searchBlog} onValueChange={setSearchBlog} />
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 py-10 xl:px-0 px-12">
          {blogElements}
        </ul>
      </div>
    </section>
  );
}

export default BlogPost;
