import React, { Fragment } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

function SearchHomePage(props) {
  return (
    <Fragment>
      <Container className='mt-3'>
        <Row className='justify-content-center'>
          <Col md={10}>
            <Form onSubmit={(event) => props.searchJournalCategories(event)}>
              <InputGroup size='lg' className='mb-3'>
                <Form.Control
                  className='bg-dark text-white border-0'
                  type='text'
                  name='journalCategoryName'
                  value={props.searchData.journalCategoryName}
                  onChange={props.updateSearchData}
                  placeholder='search journals by region, Eg: African, International, etc'
                  aria-label='search'
                  aria-describedby='search'
                />
                <Button
                  onClick={(event) => props.searchJournalCategories(event)}
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

export default SearchHomePage;
