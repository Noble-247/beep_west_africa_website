import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";

function Proceedings() {
  useTitle("Beep West Africa | Conference Proceedings");
  return (
    <Fragment>
      <Container fluid className='bg-black text-white text-center p-5'>
        <h1>PROCEEDINGS</h1>
      </Container>
    </Fragment>
  );
}

export default Proceedings;
