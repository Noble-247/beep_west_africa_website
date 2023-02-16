import React, { Fragment, useState } from "react";
import {
  Badge,
  Col,
  Container,
  Row,
  Tab,
  Tabs,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useTitle from "../customHooks/useTitle";
import Search from "../utilities/Search";
import JournalData from "../../Database/allJournals/journals";

function Journals() {
  useTitle("Beep West Africa | All Journals");

  const firstLetterInTitle = [
    { id: 1, letter: "A" },
    { id: 2, letter: "B" },
    { id: 3, letter: "C" },
    { id: 4, letter: "D" },
    { id: 6, letter: "E" },
    { id: 7, letter: "F" },
    { id: 8, letter: "G" },
    { id: 9, letter: "H" },
    { id: 10, letter: "I" },
    { id: 12, letter: "J" },
    { id: 13, letter: "K" },
    { id: 14, letter: "L" },
    { id: 15, letter: "M" },
    { id: 16, letter: "N" },
    { id: 17, letter: "O" },
    { id: 18, letter: "P" },
    { id: 19, letter: "Q" },
    { id: 20, letter: "R" },
    { id: 21, letter: "S" },
    { id: 22, letter: "T" },
    { id: 23, letter: "U" },
    { id: 24, letter: "V" },
    { id: 25, letter: "W" },
    { id: 26, letter: "X" },
    { id: 27, letter: "Y" },
    { id: 28, letter: "Z" },
  ];
  const [journalCategories /* setJournalCategories */] = useState(JournalData);

  return (
    <Fragment>
      <Container fluid className='bg-black text-white text-center p-5'>
        <h1>JOURNALS</h1>
        <Row>
          <Col>
            <Search />
          </Col>
        </Row>
      </Container>
      <Container className='pt-4'>
        <Row>
          <Col sm={6}>
            <h5>Browse by Categories</h5>
            <aside style={{ lineHeight: "2" }} className='bg-dark p-1'>
              <ListGroup variant='flush'>
                {journalCategories.map((category) => {
                  return (
                    <ListGroup.Item key={category.id}>
                      <Link className='text-decoration-none' to={"/"}>
                        {category.category}{" "}
                        <Badge bg='secondary'>
                          {category.numberOfArticlesPublished}
                        </Badge>
                      </Link>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </aside>
          </Col>
          <Col sm={6}>
            <h5>Browse by Title</h5>
            <section>
              <Tabs
                defaultActiveKey='profile'
                id='uncontrolled-tab-example'
                className='mb-3'
              >
                {firstLetterInTitle.map((alphabet) => {
                  return (
                    <Tab
                      eventKey={alphabet.letter}
                      title={alphabet.letter}
                      key={alphabet.id}
                    >
                      <ListGroup variant='flush'>
                        {journalCategories.map((category) => {
                          if (
                            alphabet.letter ===
                            category.category.substring(0, 1)
                          ) {
                            return (
                              <ListGroup.Item key={category.id}>
                                <Link className='text-decoration-none' to={"/"}>
                                  {category.category}{" "}
                                  <Badge bg='secondary'>
                                    {category.numberOfArticlesPublished}
                                  </Badge>
                                </Link>
                              </ListGroup.Item>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </ListGroup>
                    </Tab>
                  );
                })}
              </Tabs>
            </section>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Journals;

/* 

<Tab eventKey='home' title='Home'>
                  <p>Lorem ipsum dolor</p>
                </Tab>
                <Tab eventKey='profile' title='Profile'>
                  <p>Lorem ipsum dolor sit amet</p>
                </Tab>
                <Tab eventKey='contact' title='Contact'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                </Tab>
*/

/* 

<ListGroup.Item>
                  <Link className='text-decoration-none fw-bold' to={"/"}>
                    Home
                  </Link>
                </ListGroup.Item>

*/
