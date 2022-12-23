import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import useTitle from "../customHooks/useTitle";

function SubmitManuscript() {
  useTitle("Beep West Africa | Submit Manuscript");

  const [formData, setFormData] = React.useState({
    userName: "",
    password: "",
  });

  function updateFormData(event) {
    const { name, value } = event.target;
    setFormData((previousFormData) => {
      return {
        ...previousFormData,
        [name]: value,
      };
    });
  }

  /*  function clearFormData(event) {
    setFormData({ userName: "", password: "" });
  }
 */
  function handleRegister(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <Fragment>
      <Container className='mt-5'>
        <Row className='align-items-center justify-content-center'>
          <Col md={6}>
            <Tabs
              defaultActiveKey='AUTHOR'
              id='fill-tab-example'
              className='mb-3 fw-bold bg-dark'
              fill
            >
              <Tab
                eventKey='AUTHOR'
                title='AUTHOR'
                style={{ borderRadius: "0px" }}
              >
                <div>
                  <Card className='shadow-lg'>
                    <Card.Header className='h3 text-center'>
                      AUTHOR'S LOGIN
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Group className='mb-3'>
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='Enter Username'
                            name='userName'
                            value={formData.userName}
                            onChange={updateFormData}
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type='password'
                            placeholder='Enter Password'
                            name='password'
                            value={formData.password}
                            onChange={updateFormData}
                          ></Form.Control>
                        </Form.Group>
                      </Form>
                      <div className='d-flex justify-content-center'>
                        <Button
                          onClick={handleRegister}
                          type='submit'
                          className='d-block btn btn-dark text-primary fw-semibold w-100'
                        >
                          SIGN IN
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey='EDITOR' title='EDITOR'>
                <div>
                  <Card className='shadow-lg'>
                    <Card.Header className='h3 text-center'>
                      EDITOR'S LOGIN
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Group className='mb-3'>
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='Enter Username'
                            name='userName'
                            value={formData.userName}
                            onChange={updateFormData}
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type='password'
                            placeholder='Enter Password'
                            name='password'
                            value={formData.password}
                            onChange={updateFormData}
                          ></Form.Control>
                        </Form.Group>
                      </Form>
                      <div className='d-flex justify-content-center'>
                        <Button
                          onClick={handleRegister}
                          type='submit'
                          className='d-block btn btn-dark text-primary fw-semibold w-100'
                        >
                          SIGN IN
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey='REVIEWER' title='REVIEWER'>
                <div>
                  <Card className='shadow-lg'>
                    <Card.Header className='h3 text-center'>
                      REVIEWER'S LOGIN
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Group className='mb-3'>
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='Enter Username'
                            name='userName'
                            value={formData.userName}
                            onChange={updateFormData}
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type='password'
                            placeholder='Enter Password'
                            name='password'
                            value={formData.password}
                            onChange={updateFormData}
                          ></Form.Control>
                        </Form.Group>
                      </Form>
                      <div className='d-flex justify-content-center'>
                        <Button
                          onClick={handleRegister}
                          type='submit'
                          className='d-block btn btn-dark text-primary fw-semibold w-100'
                        >
                          SIGN IN
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default SubmitManuscript;

/* <Button
  onClick={clearFormData}
  type='button'
  className='d-block'
  variant='dark'
>
  Clear Flelds
</Button> */
