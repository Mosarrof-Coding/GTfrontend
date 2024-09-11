/* eslint-disable react/no-unescaped-entities */
import BlogCard from "../components/Blog/BlogCard";
import useFetch from "../hooks/useFetch";

/* eslint-disable react/no-unknown-property */
export default function BlogPage() {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/blogs?populate=*`
  );

  if (loading)
    return <div className="blog-container loading-section">Loading...</div>;
  if (error)
    return (
      <div className="blog-container error-section">Something went wrong!</div>
    );

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="blog-title">Our Blogs</h2>
          <h3 className="blog-subtitle">
            Golf is a game of skill and strategy, enjoyed by millions worldwide.
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
    </section>
  );
}
