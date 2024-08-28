import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Tags from "./Tags";

export default function SingleBlog() {
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch(`${import.meta.env.VITE_APP_URL}/api/blogs/${id}?populate=*`);

  if (loading)
    return (
      <div className="contizer section text-xl lg:text-2xl text-yellow-400">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="contizer section text-xl lg:text-2xl text-red-400">
        Something went wrong!
      </div>
    );

  return (
    <section className="section">
      <div className="contizer">
        <div className="blogDetails grid grid-cols-1 lg:grid-cols-2 gap-12 myGridBlogDetails">
          <div className="blogImg">
            <h3 className="inline-block text-xs sm:text-base md:text-sm lg:text-lg font-bold pt-[1px] px-1 sm:px-2 md:px-3 lg:px-4 rounded lg:rounded-md bg-[#000000] text-white sm:mb-1 lg:mb-2">
              {blog.attributes.Category}
            </h3>
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">
              {blog.attributes.Title}
            </h2>
            <div className="bg-purple-200 rounded-lg overflow-hidden my-2 lg:my-4">
              <img
                className="w-full h-auto"
                src={blog.attributes.image.data.attributes.url}
                alt="singleBlog"
              />
            </div>
            <div className="blogEtc prose-sm">
              <h4>
                <b>Created: </b>{" "}
                {new Date(blog.attributes.createdAt).toLocaleDateString()}
              </h4>
              <h4>
                <b>Published: </b>{" "}
                {new Date(blog.attributes.publishedAt).toLocaleDateString()}
              </h4>
              <h3 className="mt-0.5 text-base lg:text-lg text-gray-900">
                <b>Substance:</b> {blog.attributes.Excerpt}
              </h3>
              <h4>
                <b>Tags:</b>
              </h4>
              <div className="w-full flex flex-wrap gap-3">
                {blog.attributes.Tags?.map((tag) => (
                  <div key={tag.id} className="">
                    <Tags tag={tag} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <article className="description prose border-t-4 pt-2 lg:pt-4 border-blue-800 ">
            <h3 className="text-lg md:text-xl lg:text-2xl">Details</h3>
            <BlocksRenderer content={blog.attributes.Description} />
          </article>
        </div>
      </div>
    </section>
  );
}
