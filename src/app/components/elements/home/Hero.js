import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="Hero-Selection vh-100 d-flex align-items-center " >
    <div className="container">
      <div className="row">
        <div className="text-center">
          <h1 className="fw-bold">Home Page</h1>
          <h6>
            Please Login if you have already account, otherwise register your
            self
          </h6>
          <Link href="/login">Login</Link> / <Link href="/register">Register</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
