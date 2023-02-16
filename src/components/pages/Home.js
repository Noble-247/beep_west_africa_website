import React, { Fragment } from "react";
import Carousels from "../utilities/Carousels";
import JournalData from "../../Database/allJournals/journals";
import JournalCategory from "../utilities/JournalCategory";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Search from "../utilities/Search";
import { Link } from "react-router-dom";

/* import LatestPublishedArticle from "../utilities/LatestPublishedArticle"; */
import useTitle from "../customHooks/useTitle";

function Home() {
  useTitle("Beep West Africa | Home");
  // console.log(JournalCategoties);
  const iconStyles = {
    fontSize: "50px",
  };
  const [journalCategoryData, setJournalCategoryData] = useState(JournalData);

  return (
    <Fragment>
      <Carousels />
      <Container>
        <Search />
      </Container>
      <div className=' bg-white'>
        <Container className='d-flex justify-content-between flex-wrap text-primary my-3 text-center fw-bold p-3'>
          <Link to={"/"} className='d-block flex-grow-1'>
            <div className='border p-2'>
              <i className='bi bi-arrow-up-circle' style={iconStyles}></i>
              <p>SUBMIT MANUSCRIPT</p>
            </div>
          </Link>
          <Link to={"/"} className='d-block flex-grow-1'>
            <div className='border p-2'>
              <i className='bi bi-journals' style={iconStyles}></i>
              <p>JOURNALS</p>
            </div>
          </Link>
          <Link to={"/"} className='d-block flex-grow-1'>
            <div className='border p-2'>
              <i className='bi bi-journal-check' style={iconStyles}></i>
              <p>PROCEEDINGS</p>
            </div>
          </Link>
          <Link to={"/"} className='d-block flex-grow-1'>
            <div className='border p-2'>
              <i className='bi bi-arrow-repeat' style={iconStyles}></i>
              <p>CONFERENCES</p>
            </div>
          </Link>
        </Container>
      </div>
      <Container>
        <Row className='mb-3'>
          {journalCategoryData.map((data) => {
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
