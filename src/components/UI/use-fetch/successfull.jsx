import React from "react";
import useJsonFetch from "./useJsonFetch";

const Successfull = () => {
  const [data, loading] = useJsonFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="m-2">
      <h1>Successfull https://jsonplaceholder.typicode.com/photos</h1>
      <div className="border border-2 p-2">{JSON.stringify(data[0])}</div>
    </div>
  );
};

export default Successfull;
