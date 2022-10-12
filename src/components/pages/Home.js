import React from "react";
import Carousels from "../utilities/Carousels";
import JournalData from "../../data/journals";
import JournalCategory from "../utilities/JournalCategory";
import { Container, Row } from "react-bootstrap";

function Home() {
  const JournalCategoties = JournalData.map((data) => {
    return (
      <JournalCategory
        key={data.id}
        category={data.category}
        image={data.image}
        id={data.id}
      />
    );
  });
  // console.log(JournalCategoties);
  return (
    <div>
      <Carousels />
      <h1>Home</h1>
      <Container>
        <Row>{JournalCategoties}</Row>
      </Container>
    </div>
  );
}

export default Home;
