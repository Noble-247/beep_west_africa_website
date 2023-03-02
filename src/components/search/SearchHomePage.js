import React, { Fragment } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

function SearchHomePage(props) {
  return (
    <Fragment>
      <Container className='mt-3'>
        <Row className='justify-content-center'>
          <Col md={10}>
            <Form
              onSubmit={(event) => props.searchJournalCategories(event)}
              className='mb-4'
            >
              <InputGroup size='lg'>
                <Form.Control
                  className='bg-dark text-white border-0'
                  type='text'
                  name='journalCategoryName'
                  value={props.searchData.journalCategoryName}
                  onChange={props.updateSearchData}
                  placeholder='Search Journals by Region, Eg: African, International, etc'
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
              <div>{props.searchFieldIsEmptyErrorState}</div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default SearchHomePage;
