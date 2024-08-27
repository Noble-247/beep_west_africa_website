import { Fragment } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import useTitle from "../customHooks/useTitle";
import ContactUsForm from "../forms/ContactUsForm";

function ContactUs() {
  useTitle("Beep West Africa | Contact Us");

  return (
    <Fragment>
      <Container>
        <Row className="mt-5 justify-content-center">
          <Col md={6}>
            <ContactUsForm />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ContactUs;
