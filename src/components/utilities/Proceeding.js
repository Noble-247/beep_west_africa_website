import React, { Fragment } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Proceeding(props) {
  const abstract = props.abstract;
  const abstractSize = 200;

  const newAbstract = abstract.slice(0, abstractSize) + "....";

  return (
    <Fragment>
      <Col md='9' className='bg-white my-3 p-4'>
        <small className='text-primary fw-bold d-block my-3'>
          {props.title}
        </small>
        <h4>{props.topic}</h4>
        <p>{newAbstract}</p>
        <div className='fw-bold'>
          <p className='my-0'>Author: {props.author}</p>
          <p>Article Number: {props.articleNumber}</p>
        </div>
        <Link to={`/proceeding/${props.id}`} className='btn btn-dark'>
          View Details
        </Link>
      </Col>
    </Fragment>
  );
}

export default Proceeding;
