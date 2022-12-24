import React, { Fragment } from "react";
import { Button, Card, Form } from "react-bootstrap";

function ReviewerLoginFormForManuscript() {
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
    setFormData({ userName: "", password: "" });
  }

  return (
    <Fragment>
      <Card className='shadow-lg'>
        <Card.Header className='h3 text-center'>REVIEWER'S LOGIN</Card.Header>
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
    </Fragment>
  );
}

export default ReviewerLoginFormForManuscript;
