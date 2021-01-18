import React from "react";

function Blog(props) {
  const { blog } = props;
  console.log(blog);
  return (
    <li className="rounded overflow-hidden my-2 block col-span-4 space-y-4 bg-white shadow-md">
      <article>
        <img
          className="w-auto h-52 mx-auto"
          src="https://res.cloudinary.com/khaokruacooking/image/upload/v1607773201/image/gs6yw1u8jvqr29rqkewz.jpg"
          alt="Sunset in the mountains"
        />
        <div className="p-3">
          <div className="">
            <button className="text-yellow-200 hover:text-white w-36 h-8 bg-transparent border-solid border-2 border-yellow-200 hover:bg-yellow-200 transition-all ease-in-out active:bg-green-700 rounded">
              <a href="#home" className="">
                {blog.tag}
              </a>
            </button>
          </div>
          <div className="mb-2 mt-2 h-36 sm:h-36 md:h-28 lg:h-36">
            <h2 className="">
              <a
                href="#gallery"
                className="text-grey-darker text-2xl font-medium cursor-pointer leading-normal"
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
