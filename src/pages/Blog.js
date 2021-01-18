import React from "react";

function Blog(props) {
  const { blog, Format } = props;

  return (
    <li className="col-span-4 space-y-4">
      <article
        className={`rounded overflow-hidden my-2 ${
          Format[0].Grid ? "block space-y-4" : "flex"
        } col-span-4 bg-white shadow-md `}
      >
        <picture className={Format[0].Grid ? "" : ""}>
          <img
            className={` ${Format[0].Grid ? " h-auto w-auto" : "h-auto w-60"} `}
            src="https://d3ui957tjb5bqd.cloudfront.net/uploads/images/4/44/44539.pic.jpg?1490282217"
            alt="Sunset in the mountains"
          />
        </picture>

        <div className={` ${Format[0].Grid ? "p-3" : "ml-10 p-0"} `}>
          <div className="">
            <button className="text-yellow-200 hover:text-white w-36 h-8 bg-transparent border-solid border-2 border-yellow-200 hover:bg-yellow-200 transition-all ease-in-out active:bg-green-700 rounded">
              <a href="#home" className="">
                {blog.tag}
              </a>
            </button>
          </div>
          <div
            className={` mb-2 mt-2 ${
              Format[0].Grid ? "h-36 sm:h-36 md:h-28 lg:h-36" : "h-20"
            } `}
          >
            <h2 className="">
              <a
                href="#gallery"
                className={`text-grey-darker font-medium cursor-pointer leading-normal ${
                  Format[0].Grid ? "text-2xl" : "text-lg"
                }  `}
              >
                {blog.story}
              </a>
            </h2>
          </div>
          <div className="font-medium flex flex-row items-center py-2">
            <span className="text-red-200 mr-2">By</span>
            <span className="text-gray-500 mr-3">M4XeXP</span>
            {/* <span>•</span> */}
            <span className="text-gray-500">January 18, 2021</span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Blog;
