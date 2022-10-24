import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";

function ContactUs() {
  useTitle("Beep West Africa | Contact Us");
  return (
    <Fragment>
      <Container>
        <h1>ContactUs</h1>
      </Container>
    </Fragment>
  );
}

export default ContactUs;
