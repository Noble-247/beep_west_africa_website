import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";

function CallForPaper() {
  useTitle("Beep West Africa | Call For Paper");
  return (
    <Fragment>
      <Container>
        <h1>CallForPaper</h1>
      </Container>
    </Fragment>
  );
}

export default CallForPaper;
