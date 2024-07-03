/* eslint-disable react/no-unescaped-entities */
import BlogCard from "../components/Blog/BlogCard";
import useFetch from "../hooks/useFetch";

/* eslint-disable react/no-unknown-property */
export default function BlogPage() {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/blogs?populate=*`
  );
  if (loading)
    return (
      <div className="container section text-2xl text-yellow-400 pt-14">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="container section text-2xl text-red-600 pt-14">
        Something went wrong!
      </div>
    );
  return (
    <section className="section prose">
      <div className="container">
        <div className="heading text-center max-w-[560px] mx-auto pb-8">
          <h2 className="text-2xl font-semibold my-2">Our Blogs</h2>
          <h3 className="text-xl font-medium text-gray-600">
            Golf is a game of skill and strategy, enjoyed by millions worldwide.
          </h3>
        </div>
        <div className="mygrid">
          {data?.map((blog) => (
            <div key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
