import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Error 404</h2>
      <p>Sorry, This page was not found</p>
      <Link to="/">Go Home</Link> 
      {/* the Link must be from react router dom */}
    </div>
  );
};

export default Error;
