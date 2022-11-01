/*TODO: ADD DYNAMIC PAGE TITLE FOR EACH JOURNAL CATEGORY  */

import React from "react";
import { /* useNavigate, */ useParams } from "react-router-dom";
import JournalData from "../../Database/allJournals/journals";
import { Container } from "react-bootstrap";

function JournalCategoryDetails() {
  const { journal_category_ID } = useParams();
  //   console.log(journal_category_ID);

  /*  const navigate = useNavigate(); */

  const thisJournalCategory = JournalData.filter((obj) => {
    return obj.id === parseInt(journal_category_ID);
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
              </Container>
            </section>
            <section>
              {category.articlesInThisCategory.map((article) => {
                return (
                  <div key={article.id}>
                    <Container>
                      <h3>{article.topic}</h3>
                    </Container>
                  </div>
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
