import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";
import Spinner from "../utilities/Spinner";
import useAxiosFetch from "../customHooks/useAxiosFetch";

function GeneralNews() {
  useTitle("Beep West Africa | General News");

  const { news, error, loading, categoryHeading } = useAxiosFetch(
    "https://inshorts.deta.dev/news?category=science"
  );

  return (
    <Fragment>
      <Container className='mt-5'>
        <div>{loading && <Spinner />}</div>
        <div className='text-center'>
          <h2>
            <span>{categoryHeading && categoryHeading.toUpperCase()}</span>{" "}
            <span>{categoryHeading && "NEWS FROM CREDIBLE SOURCES"}</span>
          </h2>
        </div>
        <div>
          {news &&
            news.map((story) => (
              <Row
                key={story.id}
                className='align-items-center justify-content-center'
              >
                <Col md={10} className='bg-black my-2 p-3'>
                  <h5 className='text-primary'>{story.title}</h5>
                  <p className='text-white'>{story.content}</p>
                  <a
                    href={story.readMoreUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-outline-light'
                  >
                    Read More
                  </a>
                  <h6 className='text-primary mt-3 mb-0'>
                    Author: {story.author}
                  </h6>
                  <small className='text-primary'>
                    {story.date}, {story.time}
                  </small>
                </Col>
              </Row>
            ))}
        </div>
        <div className='text-center text-danger my-5'>
          {error && <h1>Sorry, A {error} Occured </h1>}
        </div>
      </Container>
    </Fragment>
  );
}

export default GeneralNews;
