import { useFormik } from "formik";
import React, { Fragment, useState } from "react";
import { Button, Card, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { loginFormSchema } from "./formSchemas";
import { useNavigate } from "react-router-dom";

function ReviewerLoginFormForManuscript() {
  // TODO: CONNECT TO A BACKEND
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Formik States and Actions
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
    await new Promise((resolve) => setTimeout(resolve, 3000));
    actions.resetForm();
    navigate("/");
  }

  console.log(errors);

  return (
    <Fragment>
      <Card className='shadow-lg'>
        <Card.Header className='h3 text-center'>REVIEWER'S LOGIN</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              className='mb-3'
              controlId='floatingInput'
              label='Email Address'
            >
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
            </FloatingLabel>
            <FloatingLabel
              className='mb-0'
              label='Password'
              style={{ display: "flex" }}
            >
              <Form.Control
                type={showPassword ? "text" : "password"}
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
              <InputGroup.Text
                id='basic-addon2'
                style={{ cursor: "pointer" }}
                onClick={togglePassword}
              >
                <i className='bi bi-eye-fill'></i>
              </InputGroup.Text>
            </FloatingLabel>
            <Form.Text
              className='text-danger mb-3'
              aria-label='password error message'
            >
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
            <div className='d-flex justify-content-center mt-3'>
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
