/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <>
      <article className="h-full overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <div className="">
          <img
            src={blog.attributes.image.data.attributes.url}
            alt="blog"
            className="my-0"
          />
        </div>
        <div className="bg-white px-2 sm:p-3">
          <h3 className="my-1 font-medium text-base text-gray-900">
            {blog.attributes.Title}
          </h3>
          <h4 className="text-lg font-semibold text-purple-600">
            {blog.attributes.Category}
          </h4>
          <p className="line-clamp-3 text-sm/relaxed text-gray-500">
            {blog.attributes.Excerpt}
          </p>
          <Link
            to={`/blog_details/${blog.id}`}
            className="inline-block py-2 font-medium text-[#059668bc] hover:text-[#059668]"
          >
            Read Blogs
          </Link>
        </div>
      </article>
    </>
  );
}
