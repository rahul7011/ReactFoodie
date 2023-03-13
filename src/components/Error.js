import { useRouteError } from "react-router-dom";
const Error = () => {
    const err=useRouteError();  //To get the current error
    console.log(err);
  return (
    <div>
      <h3 style={{color: "red",textAlign:"center"}}>{err.status+" : "+err.statusText}</h3>
      <h3 style={{color: "red",textAlign:"center"}}>{err.data}</h3>
      <h1>Sorry...</h1>
      <h2>
        Either you mistyped the url or we deleted that page,but let's agree to
        blame this on you.!
      </h2>
    </div>
  );
};
export default Error;
