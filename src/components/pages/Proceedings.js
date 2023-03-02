import React, { Fragment, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";
import SearchProceedings from "../search/SearchProceedings";
import proceedings from "../../Database/allProceedings/proceedings";
import Proceeding from "../utilities/Proceeding";
import SpinnerImage from "../../image/utility_photos/Spinner-1s-200px.gif";

function Proceedings() {
  useTitle("Beep West Africa | Conference Proceedings");

  // Page States
  const [conferenceProceedings, setConferenceProceedings] =
    useState(proceedings);
  const [searchData, setSearchData] = useState({ proceedingName: "" });

  // Set Error State
  const [errorMessage, setErrorMessage] = useState("");

  // Loading State
  const [loading, setLoading] = useState("");

  // searchFieldIsEmpty state
  const [searchFieldIsEmptyErrorState, setSearchFieldIsEmptyErrorState] =
    useState("");

  // Set Spinner Variable for loading state
  const searchLoader = (
    <img
      src={SpinnerImage}
      alt='Loading...'
      style={{ width: "500px", margin: "auto", display: "block" }}
    />
  );

  // Error Message Content
  const errorMessageContent = (
    <div>
      <div className='mb-2 text-primary'>
        Sorry, Your Search Did Not Return Any Data!
      </div>
      <Button
        onClick={(e) => {
          setConferenceProceedings(proceedings);
          setErrorMessage("");
        }}
        className='btn btn-dark'
      >
        Go Back
      </Button>
    </div>
  );

  // Error message to display if search field is empty
  const searchFieldIsEmptyErrorMessage = (
    <p className='mb-3 text-danger fw-bold'>
      <i className='bi bi-exclamation-circle-fill'></i> Please Enter A Search
      Query....
    </p>
  );

  // Search Form Controls
  function updateSearchData(event) {
    const { name, value } = event.target;
    setSearchData((previousSearchData) => {
      return {
        ...previousSearchData,
        [name]: value,
      };
    });
  }

  // Search Function onClick
  function searchProceeding(event) {
    event.preventDefault();

    // Do nothing if searchData is empty
    if (searchData.proceedingName === "") {
      setSearchFieldIsEmptyErrorState(searchFieldIsEmptyErrorMessage);

      setTimeout(() => {
        setSearchFieldIsEmptyErrorState("");
      }, 3000);
      return;
    }

    setLoading(searchLoader);

    const filteredData = conferenceProceedings.filter((data) =>
      data.author
        .toLowerCase()
        .includes(searchData.proceedingName.toLowerCase())
    );
    setSearchData({ proceedingName: "" });

    setTimeout(() => {
      setConferenceProceedings(filteredData);
    }, 2000);

    setTimeout(() => {
      setLoading("");
    }, 3000);

    if (filteredData.length < 1) {
      setErrorMessage(errorMessageContent);
    } else {
      setErrorMessage("");
    }
  }

  return (
    <Fragment>
      <Container fluid className='bg-black text-white text-center p-5'>
        <h1>PROCEEDINGS</h1>
        <Row>
          <Col>
            <SearchProceedings
              searchData={searchData}
              updateSearchData={updateSearchData}
              searchProceeding={searchProceeding}
              searchFieldIsEmptyErrorState={searchFieldIsEmptyErrorState}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <section>
          <h4 className='text-center mt-3 fw-bold'>ARTICLES</h4>
          <Row>
            <Row
              style={{
                position: "fixed",
                top: "100px",
                left: "50px",
                zIndex: "100",
              }}
              className='align-items-center justify-content-center'
            >
              <Col md={10}>{loading}</Col>
            </Row>
          </Row>
          {conferenceProceedings &&
            conferenceProceedings.map((conferenceProceeding) => {
              return (
                <div key={conferenceProceeding.id}>
                  <Row className='justify-content-center'>
                    <Proceeding
                      id={conferenceProceeding.id}
                      title={conferenceProceeding.title}
                      topic={conferenceProceeding.topic}
                      author={conferenceProceeding.author}
                      articleNumber={conferenceProceeding.articleNumber}
                      abstract={conferenceProceeding.abstract}
                      keywords={conferenceProceeding.keywords}
                      copywrite={conferenceProceeding.copywrite}
                    />
                  </Row>
                </div>
              );
            })}
          <Row className='my-5'>
            <h3 className='text-center'>{errorMessage}</h3>
          </Row>
          <Container></Container>
        </section>
      </Container>
    </Fragment>
  );
}

export default Proceedings;
