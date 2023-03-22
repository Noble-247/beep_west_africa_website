import { useFormik } from "formik";
import React, { Fragment } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { loginFormSchema } from "./formSchemas";

function ReviewerLoginFormForManuscript() {
  const {
    values,
    isSubmitting,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormSchema,
    onSubmit,
  });

  async function onSubmit(values, actions) {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  }

  console.log(errors);

  return (
    <Fragment>
      <Card className='shadow-lg'>
        <Card.Header className='h3 text-center'>REVIEWER'S LOGIN</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your email'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email ? "border-danger border-2" : ""
                }
              ></Form.Control>
              <Form.Text className='text-danger'>
                {errors.email && touched.email ? (
                  <div>
                    <i className='bi bi-exclamation-circle-fill'></i>
                    <span>{" Please enter a valid email address"}</span>
                  </div>
                ) : (
                  ""
                )}
              </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Password'
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password
                    ? "border-danger border-2"
                    : ""
                }
              ></Form.Control>
              <Form.Text className='text-danger'>
                {errors.password && touched.password ? (
                  <div>
                    <i className='bi bi-exclamation-circle-fill'></i>
                    <span>
                      {
                        " Password hint: At least one upper case English letter, one lower case English letter, one digit, one special character, and minimum eight in length"
                      }
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </Form.Text>
            </Form.Group>
            <div className='d-flex justify-content-center'>
              <Button
                type='submit'
                className='d-block btn btn-dark text-primary fw-semibold w-100'
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing In......" : "Sign In"}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default ReviewerLoginFormForManuscript;
