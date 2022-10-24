import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";

function AboutUs() {
  useTitle("Beep West Africa | About Us");
  return (
    <Fragment>
      <Container>
        <h1>AboutUs</h1>
      </Container>
    </Fragment>
  );
}

export default AboutUs;
