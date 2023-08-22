import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="cart-container">
      <div className="cartimg pt-5 pb-2">
        <h4 className="text-bolder text-color-secondary mt-3">
          Page not found
        </h4>
        <p style={{ fontSize: "13px", color: "gray" }}>
          Uh-oh! Looks like the page you are trying to access, doesn't exist.{" "}
          <br />
          Please start afresh.
        </p>
        <Link to="/">
          <button
            type=""
            className="btn btn-warning"
            style={{ backgroundColor: "orangered", color: "white" }}
          >
            GO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
