import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JournalData from "../../data/journals";
import { Container } from "react-bootstrap";

function JournalCategoryDetails(props) {
  const { journal_category_ID } = useParams();
  //   console.log(journal_category_ID);

  const navigate = useNavigate();

  const thisJournalCategory = JournalData.filter((obj) => {
    return obj.id === parseInt(journal_category_ID);
  });
  //   console.log(thisJournalCategory);

  return (
    <Fragment>
      <Container>
        <div className='mt-3'>
          <button onClick={() => navigate(-1)} className='btn btn-dark'>
            Go Back
          </button>
        </div>
        <h2>JournalCategoryDetails - {journal_category_ID}</h2>
        <h1>
          {thisJournalCategory.map((journal) => {
            return journal.title;
          })}
        </h1>
        <h2>
          {thisJournalCategory.map((journal) => {
            return journal.category;
          })}
        </h2>
      </Container>
    </Fragment>
  );
}

export default JournalCategoryDetails;
