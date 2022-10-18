import React, { Fragment } from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function JournalCategory(props) {
  return (
    <Fragment>
      <Col sm={12} md={4}>
        <Link
          className='text-decoration-none'
          to={`/journal_category/${props.id}`}
        >
          <Card>
            <Card.Img variant='top' src={props.image} />
            <Card.Body>
              <Card.Text>
                <button className='btn btn-dark btn-sm d-block mx-auto'>
                  <small>{props.title}</small> <br />
                  <small>{props.category}</small>
                </button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Fragment>
  );
}

export default JournalCategory;
