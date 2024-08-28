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
      <div className="contizer section text-2xl text-yellow-400">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="contizer section text-2xl text-red-600">
        Something went wrong!
      </div>
    );

  return (
    <section className="section">
      <div className="contizer">
        <div className="heading text-center max-w-[560px] mx-auto pb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
            Our Blogs
          </h2>
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-600">
            Golf is a game of skill and strategy, enjoyed by millions worldwide.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
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
