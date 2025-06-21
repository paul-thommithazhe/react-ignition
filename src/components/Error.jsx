import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.error(err);
  return (
    <div>
      <h4>Oops</h4>
      <h5>Something Happenedd!!!!</h5>
    </div>
  );
};

export default Error;
