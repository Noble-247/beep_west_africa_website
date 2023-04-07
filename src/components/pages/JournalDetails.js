import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import JournalData from "../../Database/allJournals/journals";

function JournalDetails() {
  // TODO: DISPLAY AN ERRORO MESSAGE IF THE ID IS INVALID

  const { journal_ID } = useParams();

  const newJournal_ID = journal_ID.slice(0, -2);

  const thisJournalArticle = JournalData.filter((obj) => {
    return obj.code === newJournal_ID;
  });

  // console.log(newJournal_ID);
  // console.log(thisJournalArticle);
  console.log(JournalData[0].numberOfArticulesPublished);

  return (
    <Container fluid className='p-0'>
      {/*   <h3>JournalDetails ID - {journal_ID}</h3> */}
      {thisJournalArticle.map((category) => {
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
                    <span className='fw-bold'>Language:</span>{" "}
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
            <Container className='mt-4 bg-white p-3'>
              {category.articlesInThisCategory.map((article) => {
                if (article.id === journal_ID) {
                  return (
                    <Container key={article.id}>
                      <h3 className='text-center'>{article.topic}</h3>
                      <small className='fw-bold text-center d-block'>
                        {article.author}
                      </small>
                      <Container className='d-flex flex-wrap justify-content-center mt-3'>
                        <p className='text-center flex-grow-1'>
                          <span className='fw-bold'>Article Number:</span>{" "}
                          {article.articleNumber}
                        </p>
                        <p className='text-center flex-grow-1'>
                          <span className='fw-bold'>Recieved: </span>{" "}
                          {article.dateRecieved}
                        </p>
                        <p className='text-center flex-grow-1'>
                          <span className='fw-bold'>Accepted:</span>{" "}
                          {article.dateAccepted}
                        </p>
                        <p className='text-center flex-grow-1'>
                          <span className='fw-bold'> Published:</span>{" "}
                          {article.datePublished}
                        </p>
                      </Container>
                      <section>
                        <h4>Abstract</h4>
                        <p>{article.abstract}</p>
                        <p>Keywords: {article.keyWords}</p>
                      </section>
                      <a className='btn btn-dark' href={article.file}>
                        Full-Text PDF
                      </a>
                    </Container>
                  );
                } else {
                  return null;
                }
              })}
            </Container>
          </div>
        );
      })}
    </Container>
  );
}

export default JournalDetails;
