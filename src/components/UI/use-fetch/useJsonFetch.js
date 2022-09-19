import { useState, useEffect } from "react";

const useJsonFetch = (url, opts) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchJson = async () => {
      try {
        const response = await fetch(url, opts);
        const json = await response.json();
        setData(json);
        setError(undefined);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };
    fetchJson();
  }, []);

  return [data, loading, error];
};

export default useJsonFetch;
