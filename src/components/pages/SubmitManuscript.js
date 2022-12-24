import React, { Fragment } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";
import AuthorLoginFormForManuscript from "../forms/AuthorLoginFormForManuscript";
import EditorLoginFormForManuscript from "../forms/EditorLoginFormForManuscript";
import ReviewerLoginFormForManuscript from "../forms/ReviewerLoginFormForManuscript";

function SubmitManuscript() {
  useTitle("Beep West Africa | Submit Manuscript");

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
                <section>
                  <AuthorLoginFormForManuscript />
                </section>
              </Tab>

              <Tab eventKey='EDITOR' title='EDITOR'>
                <section>
                  <EditorLoginFormForManuscript />
                </section>
              </Tab>

              <Tab eventKey='REVIEWER' title='REVIEWER'>
                <section>
                  <ReviewerLoginFormForManuscript />
                </section>
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
