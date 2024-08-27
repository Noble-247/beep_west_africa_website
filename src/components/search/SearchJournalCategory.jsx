import { useState, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function SearchJournalCategory() {
  /* Search Bar States & Functions */
  const [searchData, setSearchData] = useState({ journalName: "" });

  function updateSearchData(event) {
    const { name, value } = event.target;
    setSearchData((previousSearchData) => {
      return {
        ...previousSearchData,
        [name]: value,
      };
    });
  }

  function searchJournal() {
    console.log(searchData);
  }

  console.log(searchData.journalName);
  return (
    <Fragment>
      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col md={10}>
            <Form>
              <InputGroup
                size="lg"
                className="mb-3"
              >
                <Form.Control
                  className="bg-dark text-white border-0"
                  type="text"
                  name="journalName"
                  value={searchData.journalName}
                  onChange={updateSearchData}
                  placeholder="search for journals or proceedings"
                  aria-label="search"
                  aria-describedby="search"
                />
                <Button
                  onClick={(event) => searchJournal(event)}
                  className="btn btn-dark"
                  id="button-addon2"
                >
                  <i className="bi bi-search"></i>
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default SearchJournalCategory;
