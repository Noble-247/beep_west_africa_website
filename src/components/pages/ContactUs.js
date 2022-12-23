import React, { Fragment } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";

function ContactUs() {
  useTitle("Beep West Africa | Contact Us");

  const [formData, setFormData] = React.useState({
    selectDepartment: "",
    name: "",
    email: "",
    message: "",
  });

  //console.log(formData);

  function updateFormData(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);
  }

  // console.log(formData.selectDepartment);

  return (
    <Fragment>
      <Container>
        <Row className='mt-5 justify-content-center'>
          <Col md={6}>
            <Card className='shadow-lg'>
              <Card.Header className='h3 text-center bg-dark text-primary'>
                Contact Us
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <small>
                    Fill and submit this form, and we will contact you ASAP
                  </small>
                </Card.Title>
                <Form>
                  <Form.Group className='my-3'>
                    <Form.Label>Select Department</Form.Label>
                    <Form.Select
                      aria-label='select department'
                      value={formData.selectDepartment}
                      name='selectDepartment'
                      onChange={updateFormData}
                    >
                      <option disabled value='instruction'>
                        ---Choose Department---
                      </option>
                      <option value='help-desk'>Help Desk</option>
                      <option value='accounts'>Accounts</option>
                      <option value='ethics-and-compliance'>
                        Ethics and Compliance
                      </option>
                      <option value='editorial-office'>Editorial Office</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className='mb-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='type your name here'
                      value={formData.name}
                      name='name'
                      onChange={updateFormData}
                      required='required'
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='type your name here'
                      value={formData.email}
                      name='email'
                      onChange={updateFormData}
                      required='required'
                    ></Form.Control>
                    <Form.Text className='text-muted'>
                      We'll never share your email with anyone else
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className='mb-3'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={3}
                      placeholder='type your message here'
                      name='message'
                      value={formData.message}
                      onChange={updateFormData}
                    ></Form.Control>
                  </Form.Group>
                </Form>
                <div className='d-flex justify-content-around'>
                  <Button
                    onClick={handleSubmit}
                    type='submit'
                    className='d-block btn btn-dark text-primary fw-semibold w-100'
                  >
                    Send
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ContactUs;
