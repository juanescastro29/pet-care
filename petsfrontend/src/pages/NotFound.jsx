import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="hero min-h-screen"
      data-theme="cupcake"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/404-error-website-page-found-sign-webpage-connection-fail-3d-render_771335-2890.jpg?w=996",
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Not Found 404</h1>
          <p className="mb-5">
            We're sorry, but the page you are looking for cannot be found. It
            seems like you've reached a page that doesn't exist or may have been
            moved.
          </p>
          <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
