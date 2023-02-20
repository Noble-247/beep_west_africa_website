import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";
import SearchProceedings from "../search/SearchProceedings";
import proceedings from "../../Database/allProceedings/proceedings";
import Proceeding from "../utilities/Proceeding";

function Proceedings() {
  useTitle("Beep West Africa | Conference Proceedings");

  const [conferenceProceedings /* setConferenceProceedings */] =
    useState(proceedings);

  /* Search Bar States & Functions */
  const [searchData, setSearchData] = useState({ proceedingName: "" });

  function updateSearchData(event) {
    const { name, value } = event.target;
    setSearchData((previousSearchData) => {
      return {
        ...previousSearchData,
        [name]: value,
      };
    });
  }

  function searchProceeding(event) {
    console.log(searchData);
  }

  console.log(searchData.journproceedingName);

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
          {conferenceProceedings.map((conferenceProceeding) => {
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
        </section>
      </Container>
    </Fragment>
  );
}

export default Proceedings;
