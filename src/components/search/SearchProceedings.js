import React, { Fragment } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

function SearchProceedings(props) {
  return (
    <Fragment>
      <Container className='mt-3'>
        <Row className='justify-content-center'>
          <Col md={10}>
            <Form>
              <InputGroup size='lg' className='mb-3'>
                <Form.Control
                  className='bg-dark text-white border-0'
                  type='text'
                  name='proceedingName'
                  value={props.searchData.proceedingName}
                  onChange={props.updateSearchData}
                  placeholder='search for proceedings'
                  aria-label='search'
                  aria-describedby='search'
                />
                <Button
                  onClick={(event) => props.searchProceeding(event)}
                  className='btn btn-dark'
                  id='button-addon2'
                >
                  <i className='bi bi-search'></i>
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default SearchProceedings;
