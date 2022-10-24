import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";

function Proceedings() {
  useTitle("Beep West Africa | Conference Proceedings");
  return (
    <Fragment>
      <Container>
        <h1>Proceedings</h1>
      </Container>
    </Fragment>
  );
}

export default Proceedings;
