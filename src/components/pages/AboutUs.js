import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useTitle from "../customHooks/useTitle";
import QuickLinks from "../utilities/QuickLinks";

function AboutUs() {
  useTitle("Beep West Africa | About Us");
  return (
    <section>
      <Container className='mt-4'>
        <Row>
          <Col md={3}>
            <QuickLinks />
          </Col>
          <Col md={9}>
            <h2>About Us</h2>
            <p>
              BEEP WESTAFRICA is a peer-reviewed International Journal Research
              Organization of high editorial quality. BEEP is also a universally
              accessible online journal. The journal publishes researched
              articles in all areas of science, art, management and technology
            </p>
            <h3>Aims and Objectives</h3>
            <p>
              BEEP WA "BENEACADEMIC POOL & PUBLISHINGS INTERNATIONAL JOURNAL OF
              GLOBAL RESEARCH – WEST AFRICA (BEEP WA ) is a multidisciplinary
              journal concerned with all aspects of Research. BEEP WA aims to
              establish itself as a platform for exchanging ideas in new
              emerging trends that needs more focus and exposure and is always
              committed to publish articles that will strengthen the knowledge
              of upcoming Researchers and Scientists. In pursuit of these, Multi
              disciplines are invited to contribute their knowledge and
              experience. BENEACADEMIC POOL & PUBLISHINGS INTERNATIONAL JOURNAL
              OF GLOBAL RESEARCH – WEST AFRICA publishes original research
              papers, research notes and reviews across the broad field of
              environment.
            </p>
            <p>
              BEEP WA is providing a platform for the researchers, academicians,
              professional, practitioners and students to impart and share
              knowledge in the form of high quality empirical and theoretical
              research papers, case studies, literature reviews and book
              reviews. BEEP WA welcomes and acknowledges high quality
              theoretical and empirical original research papers, case studies,
              review papers, literature reviews, book reviews, conceptual
              framework, analytical and simulation models, technical note from
              researchers, academicians, professional, practitioners and
              students from all over the world.
            </p>
            <h3>Editor in Chief</h3>
            <p>
              Associate Prof. MANSAF ALAM BEEP International Publishing
              (Department of Computer Science) Jamila Millia Islamia, New Delhi,
              India
            </p>
            <h3>International Coordinator</h3>
            <p>
              TAMUNOENE GODDYSON BEEP West Africa, 31 Ikwerre Road, Port
              Harcourt .Department of Computer Science Captain Elechi Amadi
              Polytechnic Port Harcourt, Rivers State, Nigeria
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
