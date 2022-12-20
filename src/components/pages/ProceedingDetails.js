import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import proceedings from "../../Database/allProceedings/proceedings";

function ProceedingDetails() {
  const { proceeding_ID } = useParams();

  const detailsOfProceeding = proceedings;

  console.log(detailsOfProceeding);

  return (
    <Fragment>
      <Container className='my-3 bg-white p-3'>
        {/*  <h4>ID: {proceeding_ID}</h4> */}
        {detailsOfProceeding.map((details) => {
          if (details.id === Number(proceeding_ID)) {
            return (
              <section>
                <small className='fw-bold text-primary d-block mb-2'>
                  {details.title}
                </small>
                <h4>{details.topic}</h4>
                <h6>{details.author}</h6>
                <h4 className='mt-4'>Abstract</h4>
                <p>{details.abstract}</p>
                <p>
                  <span className='fw-bold'>keywords: </span>
                  {details.keywords}
                </p>
                <p>{details.copywrite}</p>
                <a className='btn btn-dark' href={details.file}>
                  Full-Text PDF
                </a>
              </section>
            );
          } else {
            return null;
          }
        })}
      </Container>
    </Fragment>
  );
}

export default ProceedingDetails;
