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
      <div className="container section pt-14 text-xl lg:text-2xl text-yellow-400">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="container section pt-14 text-xl lg:text-2xl text-red-400">
        Something went wrong!
      </div>
    );

  return (
    <section className="section prose-sm">
      <div className="container">
        <div className="blogDetails grid grid-cols-1 lg:grid-cols-2 gap-12 myGridBlogDetails">
          <div className="blogImg">
            <h3 className="inline-block text-base font-bold md:text-xl px-3 lg:px-4 rounded lg:rounded-md bg-[#6bd2e9] text-white">
              {blog.attributes.Category}
            </h3>
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">
              {blog.attributes.Title}
            </h2>
            <div className="bg-purple-200">
              {/* <img
                className="w-full h-auto"
                src={
                  `${import.meta.env.VITE_APP_URL}` +
                  blog.attributes.image.data[0].attributes.url
                }
                alt=""
              /> */}
            </div>
            <div className="blogEtc">
              <h4>
                <b>Create: </b> {blog.attributes.createdAt}
              </h4>
              <h4>
                <b>Publish: </b>
                {blog.attributes.publishedAt}
              </h4>
              <h3 className="mt-0.5 text-lg text-gray-900 hover:underline ">
                <b>Substance:</b> {blog.attributes.Excerpt}
              </h3>
            </div>
            <h4>
              <b>Tags:</b>
            </h4>
            <div className="py-2 w-full flex flex-wrap gap-3">
              {blog.attributes.Tags?.map((tag) => (
                <div key={tag.id} className="">
                  <Tags key={tag.id} tag={tag} />
                </div>
              ))}
            </div>
          </div>
          <article className="description prose lg:prose-lg">
            <BlocksRenderer content={blog.attributes.Description} />
          </article>
        </div>
      </div>
    </section>
  );
}
