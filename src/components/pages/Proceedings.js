import React, { Fragment, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";
import SearchProceedings from "../search/SearchProceedings";
import proceedings from "../../Database/allProceedings/proceedings";
import Proceeding from "../utilities/Proceeding";

function Proceedings() {
  useTitle("Beep West Africa | Conference Proceedings");

  // Page States
  const [conferenceProceedings, setConferenceProceedings] =
    useState(proceedings);
  const [searchData, setSearchData] = useState({ proceedingName: "" });
  const [errorMessage, setErrorMessage] = useState("");

  // Error Message Content
  let errorMessageContent = (
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

    const filteredData = conferenceProceedings.filter((data) =>
      data.author
        .toLowerCase()
        .includes(searchData.proceedingName.toLowerCase())
    );
    setSearchData({ proceedingName: "" });
    setConferenceProceedings(filteredData);
    if (filteredData.length < 1) {
      setErrorMessage(errorMessageContent);
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
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <section>
          <h4 className='text-center mt-3 fw-bold'>ARTICLES</h4>
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
        </section>
      </Container>
    </Fragment>
  );
}

export default Proceedings;
