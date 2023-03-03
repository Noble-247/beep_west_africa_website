import React, { Fragment } from "react";
import Carousels from "../utilities/Carousels";
import JournalData from "../../Database/allJournals/journals";
import JournalCategory from "../utilities/JournalCategory";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SearchHomePage from "../search/SearchHomePage";
import { Link } from "react-router-dom";
import SpinnerImage from "../../image/utility_photos/Spinner-1s-200px.gif";

/* import LatestPublishedArticle from "../utilities/LatestPublishedArticle"; */
import useTitle from "../customHooks/useTitle";

function Home() {
  useTitle("Beep West Africa | Home");

  // Page States
  const [journalCategoryData, setJournalCategoryData] = useState(JournalData);
  const [searchData, setSearchData] = useState({ journalCategoryName: "" });

  // Error State
  const [errorMessage, setErrorMessage] = useState("");

  // Loading State
  const [loading, setLoading] = useState("");

  // searchFieldIsEmpty state
  const [searchFieldIsEmptyErrorState, setSearchFieldIsEmptyErrorState] =
    useState("");

  // Icon Styles Object
  const iconStyles = {
    fontSize: "50px",
  };

  // Set Spinner Variable for loading state
  const searchLoader = (
    <img
      src={SpinnerImage}
      alt='Loading...'
      style={{ width: "500px", margin: "auto", display: "block" }}
    />
  );

  // Error Message Content if search filter returns false
  const errorMessageContent = (
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

  // Error message to display if search field is empty
  const searchFieldIsEmptyErrorMessage = (
    <p className='mb-3 text-danger fw-bold'>
      <i className='bi bi-exclamation-circle-fill'></i> Please Enter A Search
      Query....
    </p>
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

    // Do nothing if searchData is empty and display an error message
    if (searchData.journalCategoryName === "") {
      setSearchFieldIsEmptyErrorState(searchFieldIsEmptyErrorMessage);

      setTimeout(() => {
        setSearchFieldIsEmptyErrorState("");
      }, 3000);
      return;
    }

    setLoading(searchLoader);

    const filteredData = JournalData.filter((data) =>
      data.title
        .toLowerCase()
        .includes(searchData.journalCategoryName.toLowerCase())
    );

    setSearchData({ journalCategoryName: "" });

    setTimeout(() => {
      setJournalCategoryData(filteredData);
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
      <Carousels />
      <Container>
        <SearchHomePage
          searchData={searchData}
          updateSearchData={updateSearchData}
          searchJournalCategories={searchJournalCategories}
          searchFieldIsEmptyErrorState={searchFieldIsEmptyErrorState}
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
          <Row
            style={{
              position: "fixed",
              top: "100px",
              left: "10px",
              zIndex: "100",
            }}
            className='align-items-center justify-content-center'
          >
            <Col md={10}>{loading}</Col>
          </Row>
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
