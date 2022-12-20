/*TODO: ADD DYNAMIC PAGE TITLE FOR EACH JOURNAL CATEGORY  */

import React from "react";
import { /* useNavigate, */ Link, useParams } from "react-router-dom";
import JournalData from "../../Database/allJournals/journals";
import { Col, Container, Row } from "react-bootstrap";

function JournalCategoryDetails() {
  const { journal_category_ID } = useParams();
  //   console.log(journal_category_ID);

  /*  const navigate = useNavigate(); */

  const thisJournalCategory = JournalData.filter((obj) => {
    return obj.id === Number(journal_category_ID);
  });
  //   console.log(thisJournalCategory);

  return (
    <Container fluid className='p-0'>
      {thisJournalCategory.map((category) => {
        return (
          <div>
            <section className='bg-dark text-white py-5' key={category.id}>
              <Container>
                <h1 className='text-center h2 text-uppercase'>
                  <span>{category.title}</span>
                  <span>{category.category}</span>
                </h1>
                <Container className='d-flex flex-wrap justify-content-center'>
                  <p className='text-center flex-grow-1'>
                    <span className='fw-bold'> Language:</span>{" "}
                    {category.language}
                  </p>
                  <p className='text-center flex-grow-1'>
                    <span className='fw-bold'> ISSN:</span> {category.ISSN}
                  </p>
                  <p className='text-center flex-grow-1'>
                    <span className='fw-bold'>Start Year:</span>{" "}
                    {category.startYear}
                  </p>
                  <p className='text-center flex-grow-1'>
                    <span className='fw-bold'>Articles Published:</span>{" "}
                    {category.numberOfArticlesPublished}
                  </p>
                </Container>
              </Container>
            </section>
            <section className='mt-4'>
              {category.articlesInThisCategory.map((articles) => {
                return (
                  <Container key={articles.id}>
                    <Row>
                      <Col className='my-3 bg-white p-3'>
                        <h4 className='text-capitalize text-primary'>
                          {articles.topic}
                        </h4>
                        <small className='fw-bold'>
                          {articles.dateAccepted} - {articles.datePublished}
                        </small>
                        <p>{articles.abstract}</p>
                        <small className='fw-bold'>
                          Article Number: {articles.articleNumber}
                        </small>
                        <Link
                          className='btn btn-dark d-block my-2'
                          to={`/journal/${articles.id}`}
                        >
                          View Details
                        </Link>
                      </Col>
                    </Row>
                  </Container>
                );
              })}
            </section>
          </div>
        );
      })}
    </Container>
  );
}

export default JournalCategoryDetails;

/* 

{thisJournalCategory.map((category) => {
          return (
            <Container key={category.id}>
              <h1 className='text-center h2 text-uppercase'>
                <span>{category.title}</span>
                <span>{category.category}</span>
              </h1>
              <section className='text-center'>
                <p className='d-inline-block me-4 pe-3 border-end'>
                  Language: {category.language}
                </p>
                <p className='d-inline-block me-4 pe-3 border-end'>
                  ISSN: {category.ISSN}
                </p>
                <p className='d-inline-block me-4 pe-3 border-end'>
                  Start Year: {category.startYear}
                </p>
                <p className='d-inline-block me-4 pe-3'>
                  Articles Published: {category.numberOfArticlesPublished}
                </p>
              </section>
              <section>
                {category.articlesInThisCategory.map((article) => {
                  return (
                    <div key={article.id}>
                      <h3>{article.topic}</h3>
                    </div>
                  );
                })}
              </section>
            </Container>
          );
        })}

*/

/*   <div className='mt-3'>
          <button onClick={() => navigate(-1)} className='btn btn-dark'>
            Go Back
          </button> p-3
        </div> */
