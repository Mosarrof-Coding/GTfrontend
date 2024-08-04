/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <>
      <article className="h-full overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <h3 className="px-4 sm:p-6 text-lg text-gray-900 hover:underline ">
          {blog.attributes.Title}
        </h3>
        <div>
          <img
            src={blog.attributes.image.data.attributes.url}
            alt="blog"
            className="my-0 max-h-[305px]"
          />
        </div>
        <div className="bg-white px-4 sm:p-6">
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
