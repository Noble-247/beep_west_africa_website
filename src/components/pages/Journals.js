import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";

function Journals() {
  useTitle("Beep West Africa | All Journals");
  return (
    <Fragment>
      <Container>
        <h1>AllJournals</h1>
      </Container>
    </Fragment>
  );
}

export default Journals;
