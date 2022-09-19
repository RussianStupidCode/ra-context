import React from "react";
import Error from "./error";
import Successfull from "./successfull";

const UseJsonFetchApp = () => {
  return (
    <div className="d-flex flex-column w-100">
      <Successfull />
      <Error />
    </div>
  );
};

export default UseJsonFetchApp;
