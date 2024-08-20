import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resData = await axios.get(url, {
          headers: {
            Authorization: `bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
          },
        });
        console.log(resData.data.data);
        setData(resData.data.data);
      } catch (err) {
        // console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}
