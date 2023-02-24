import React, { Fragment } from "react";
import Carousels from "../utilities/Carousels";
import JournalData from "../../Database/allJournals/journals";
import JournalCategory from "../utilities/JournalCategory";
import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import SearchHomePage from "../search/SearchHomePage";
import { Link } from "react-router-dom";

/* import LatestPublishedArticle from "../utilities/LatestPublishedArticle"; */
import useTitle from "../customHooks/useTitle";

function Home() {
  useTitle("Beep West Africa | Home");

  // Icon Styles Object
  const iconStyles = {
    fontSize: "50px",
  };

  // Page States
  const [journalCategoryData, setJournalCategoryData] = useState(JournalData);
  const [searchData, setSearchData] = useState({ journalCategoryName: "" });
  const [errorMessage, setErrorMessage] = useState("");

  // Error Message Content
  let errorMessageContent = (
    <div>
      <div className='mb-2 text-primary'>
        Sorry, Your Search Did Not Return Any Data!
      </div>
      <Button
        onClick={(e) => {
          setJournalCategoryData(JournalData);
          setErrorMessage("");
        }}
        className='btn btn-dark'
      >
        Return to Home Page
      </Button>
    </div>
  );

  // Search Form controls
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
  function searchJournalCategories(event) {
    event.preventDefault();
    const filteredData = JournalData.filter((data) =>
      data.title
        .toLowerCase()
        .includes(searchData.journalCategoryName.toLowerCase())
    );
    setSearchData({ journalCategoryName: "" });
    setJournalCategoryData(filteredData);
    if (filteredData.length < 1) {
      setErrorMessage(errorMessageContent);
    }
  }

  return (
    <Fragment>
      <Carousels />
      <Container>
        <SearchHomePage
          searchData={searchData}
          updateSearchData={updateSearchData}
          searchJournalCategories={searchJournalCategories}
        />
      </Container>
      <div className=' bg-white'>
        <Container className='d-flex justify-content-between flex-wrap text-primary my-3 text-center fw-bold p-3'>
          <Link to={"/submit_manuscript"} className='d-block flex-grow-1'>
            <div className='border p-2'>
              <i className='bi bi-arrow-up-circle' style={iconStyles}></i>
              <p>SUBMIT MANUSCRIPT</p>
            </div>
          </Link>
          <Link to={"/journals"} className='d-block flex-grow-1'>
            <div className='border p-2'>
              <i className='bi bi-journals' style={iconStyles}></i>
              <p>JOURNALS</p>
            </div>
          </Link>
          <Link to={"/proceedings"} className='d-block flex-grow-1'>
            <div className='border p-2'>
              <i className='bi bi-journal-check' style={iconStyles}></i>
              <p>PROCEEDINGS</p>
            </div>
          </Link>
        </Container>
      </div>
      <Container>
        <Row className='mb-3'>
          {journalCategoryData &&
            journalCategoryData.map((data) => {
              return (
                <JournalCategory
                  key={data.id}
                  image={data.image}
                  title={data.title}
                  category={data.category}
                  id={data.id}
                />
              );
            })}
        </Row>
        <Row className='my-5'>
          <h3 className='text-center'>{errorMessage}</h3>
        </Row>
        <Link to={"/"} className='text-decoration-none'>
          <div className='mb-3'>
            <div className='d-grid'>
              <Link to={"/journals"} className='btn btn-dark'>
                View All Journals
              </Link>
            </div>
          </div>
        </Link>
      </Container>
      {/*   <section className='bg-white'>
        <LatestPublishedArticle />
      </section> */}
    </Fragment>
  );
}

export default Home;
