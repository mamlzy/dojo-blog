import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error('Failed to fetch data');
        }
      })
      .then(data => {
        setError(null);
        setIsLoading(false);
        setData(data);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isLoading, error }
}

export default useFetch;