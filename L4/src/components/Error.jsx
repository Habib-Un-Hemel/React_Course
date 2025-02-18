import { use } from "react";
import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>404 Error</h1>
      <h2>Page not found</h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default Error;
