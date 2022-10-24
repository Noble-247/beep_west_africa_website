import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";

function SubmitManuscript() {
  useTitle("Beep West Africa | Submit Manuscript");
  return (
    <Fragment>
      <Container>
        <h1>SubmitManuscript</h1>
      </Container>
    </Fragment>
  );
}

export default SubmitManuscript;
