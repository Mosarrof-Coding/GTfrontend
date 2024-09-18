import useFetch from "../../hooks/useFetch";

export default function Loader() {
  const { loading, error } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/blogs?populate=*`
  );

  if (loading)
    return (
      <div className="blog-container loading-section text-xl lg:text-2xl text-yellow-400">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="blog-container loading-section text-xl lg:text-2xl text-red-400">
        Something went wrong!
      </div>
    );
}
