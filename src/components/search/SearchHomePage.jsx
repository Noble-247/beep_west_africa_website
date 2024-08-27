/* eslint-disable react/prop-types */
import { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function SearchHomePage(props) {
  return (
    <Fragment>
      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col md={10}>
            <Form
              onSubmit={(event) => props.searchJournalCategories(event)}
              className="mb-4"
            >
              <InputGroup size="lg">
                <Form.Control
                  className="bg-dark text-white border-0"
                  type="text"
                  name="journalCategoryName"
                  value={props.searchData.journalCategoryName}
                  onChange={props.updateSearchData}
                  placeholder="Search Journals by Region, Eg: African, International, etc"
                  aria-label="search"
                  aria-describedby="search"
                />
                <Button
                  onClick={(event) => props.searchJournalCategories(event)}
                  className="btn btn-dark"
                  id="button-addon2"
                >
                  <i className="bi bi-search"></i>
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
