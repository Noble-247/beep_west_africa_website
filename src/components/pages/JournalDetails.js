import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import JournalData from "../../Database/allJournals/journals";

function JournalDetails() {
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
            <section className='mt-4'>
              {category.articlesInThisCategory.map((article) => {
                if (article.id === journal_ID) {
                  return (
                    <Container key={article.id}>
                      <h3 className='text-center'>{article.topic}</h3>
                      <small className='fw-bold text-center d-block'>
                        {article.author}
                      </small>
                      <section className='d-flex justify-content-between'>
                        <span className='d-block'>
                          Article Number: {article.articleNumber}
                        </span>
                        <span className='d-block'>
                          Recieved: {article.dateRecieved}
                        </span>
                        <span className='d-block'>
                          Accepted: {article.dateAccepted}
                        </span>
                        <span className='d-block'>
                          Published: {article.datePublished}
                        </span>
                      </section>
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
                }
              })}
            </section>
          </div>
        );
      })}
    </Container>
  );
}

export default JournalDetails;
