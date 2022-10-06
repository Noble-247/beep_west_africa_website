import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function PageNotFound() {
  const height = {
    height: "400px",
  };
  return (
    <div>
      <Container
        style={height}
        className='bg-light mt-5 d-flex flex-column align-items-center justify-content-center'
      >
        <h1>Sorry, Page Not Found</h1>
        <div>
          <Link className='btn btn-secondary' to={"/"}>
            Return to Home Page
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default PageNotFound;
