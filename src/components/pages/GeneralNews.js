import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";
import Spinner from "../utilities/Spinner";

function GeneralNews() {
  useTitle("Beep West Africa | Call For Paper");
  return (
    <Fragment>
      <Container className='mt-5'>
        <Spinner />
      </Container>
    </Fragment>
  );
}

export default GeneralNews;
