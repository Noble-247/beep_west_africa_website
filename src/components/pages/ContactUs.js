import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";
import ContactUsForm from "../forms/ContactUsForm";

function ContactUs() {
  useTitle("Beep West Africa | Contact Us");

  return (
    <Fragment>
      <Container>
        <Row className='mt-5 justify-content-center'>
          <Col md={6}>
            <ContactUsForm />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ContactUs;
