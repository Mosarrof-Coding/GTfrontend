/* eslint-disable react/no-unescaped-entities */
import Art from "../components/ArtPage/Art";
import BlogCard from "../components/Blog/BlogCard";
import LoadingDots from "../components/LoadingDots";
import useFetch from "../hooks/useFetch";

export default function BlogPage() {
  const pgName = "Blog";
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/blogs?populate=*`
  );

  if (loading)
    return (
      <div className="contizer mt-16">
        <LoadingDots />
      </div>
    );
  if (error)
    return (
      <div className="contizer mt-16 text-2xl text-red-600">
        Something went wrong!
      </div>
    );

  return (
    <>
      <Art pgName={pgName} />
      <section className="padd">
        <div className="">
          <div className="contizer">
            <div className="blog-header">
              <h2 className="blog-title">Our Blogs</h2>
              <h3 className="blog-subtitle">
                Golf is a game of skill and strategy, enjoyed by millions
                worldwide.
              </h3>
            </div>

            <div className="blog-grid">
              {data?.map((blog) => (
                <div key={blog.id}>
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
