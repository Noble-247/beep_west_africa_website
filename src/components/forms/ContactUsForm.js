import { useFormik } from "formik";
import React, { Fragment } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { contactFormSchema } from "./formSchemas";

function ContactUsForm() {
  // TODO: DISPLAY A MESSAGE TO ACKNOWLEGE THAT THE MESSAGE HAS BEEN SENT

  const {
    values,
    isSubmitting,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: { selectDepartment: "", name: "", email: "", message: "" },
    validationSchema: contactFormSchema,
    onSubmit,
  });

  // console.log(formik);

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
        <Card.Header className='h3 text-center bg-dark text-primary'>
          Contact Us
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <small>
              Fill and submit this form, and we will contact you ASAP
            </small>
          </Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='my-3'>
              <Form.Label>Select a department</Form.Label>
              <Form.Select
                aria-label='select department'
                value={values.selectDepartment}
                name='selectDepartment'
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.selectDepartment ? "border-danger border-2" : ""
                }
              >
                <option></option>
                <option value='help-desk'>Help Desk</option>
                <option value='accounts'>Accounts</option>
                <option value='ethics-and-compliance'>
                  Ethics and Compliance
                </option>
                <option value='editorial-office'>Editorial Office</option>
              </Form.Select>
              <Form.Text className='text-danger'>
                {errors.selectDepartment ? (
                  <div>
                    <i className='bi bi-exclamation-circle-fill'></i>
                    <span>{" Please select a department"}</span>
                  </div>
                ) : (
                  ""
                )}
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='type your name here'
                value={values.name}
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name ? "border-danger border-2" : ""
                }
              ></Form.Control>
              <Form.Text className='text-danger'>
                {errors.name && touched.name ? (
                  <div>
                    <i className='bi bi-exclamation-circle-fill'></i>
                    <span>
                      {
                        " Please enter a valid name. Hint: Name should not be less than 5 characters"
                      }
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='type your name here'
                value={values.email}
                name='email'
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
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='type your message here'
                name='message'
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.message && touched.message
                    ? "border-danger border-2"
                    : ""
                }
              ></Form.Control>
              <Form.Text className='text-danger'>
                {errors.message && touched.message ? (
                  <div>
                    <i className='bi bi-exclamation-circle-fill'></i>
                    <span>{" Please enter a resonable message here"}</span>
                  </div>
                ) : (
                  ""
                )}
              </Form.Text>
            </Form.Group>
            <div className='d-flex justify-content-around'>
              <Button
                type='submit'
                className='d-block btn btn-dark text-primary fw-semibold w-100'
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending....." : "Send"}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default ContactUsForm;
