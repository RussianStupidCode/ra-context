import React from "react";
import useJsonFetch from "./useJsonFetch";

const Error = () => {
  const [, loading, error] = useJsonFetch(
    "https://jsonplaceholder.typicode.com/photoss"
  );

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="m-2">
      <h1>Error https://netology.ru/</h1>
      <div className="border border-2 p-2">{String(error)}</div>
    </div>
  );
};

export default React.memo(Error);
