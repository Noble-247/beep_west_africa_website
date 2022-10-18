import React, { Fragment } from "react";
import Carousels from "../utilities/Carousels";
import JournalData from "../../data/journals";
import JournalCategory from "../utilities/JournalCategory";
import { Button, Container, Row } from "react-bootstrap";
import Search from "../utilities/Search";
import { Link } from "react-router-dom";

function Home() {
  const JournalCategoties = JournalData.map((data) => {
    return (
      <JournalCategory
        key={data.id}
        image={data.image}
        title={data.title}
        category={data.category}
        id={data.id}
      />
    );
  });
  // console.log(JournalCategoties);
  const iconStyles = {
    fontSize: "50px",
  };
  return (
    <Fragment>
      <Carousels />
      <Container>
        <Search />
      </Container>
      <div className=' bg-white'>
        <Container className='d-flex justify-content-between  flex-wrap text-primary my-3 text-center fw-bold p-3'>
          <Link to={"/"}>
            <div className='border p-2 flex-grow-1'>
              <i className='bi bi-arrow-up-circle' style={iconStyles}></i>
              <p>SUBMIT MANUSCRIPT</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className='border p-2 flex-grow-1'>
              <i className='bi bi-journals' style={iconStyles}></i>
              <p>JOURNALS</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className='border p-2 flex-grow-1'>
              <i className='bi bi-journal-check' style={iconStyles}></i>
              <p>PROCEEDINGS</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className='border p-2 flex-grow-1'>
              <i className='bi bi-arrow-repeat' style={iconStyles}></i>
              <p>CONFERENCES</p>
            </div>
          </Link>
        </Container>
      </div>
      <Container>
        <Row className='mb-3'>{JournalCategoties}</Row>
        <Link to={"/"} className='text-decoration-none'>
          <div className='mb-3'>
            <div className='d-grid'>
              <Button className='btn btn-dark'> View All Journals</Button>
            </div>
          </div>
        </Link>
      </Container>
    </Fragment>
  );
}

export default Home;
