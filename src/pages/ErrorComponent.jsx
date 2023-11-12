import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();
  return (
    <div className="error-message">
      <h1>
        {err.status} : {err.statusText}
      </h1>
      <h2>Oops! Try It Again</h2>
      <h3>{err.error.message}</h3>
    </div>
  );
};

export default ErrorComponent;
