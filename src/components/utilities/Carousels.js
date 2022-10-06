import React from "react";
import { Carousel } from "react-bootstrap";
import firstCarouselImage from "../../image/alphabet-blur-books-close-up-301920.jpg";
import secondCarouselImage from "../../image/alphabet-class-conceptual-cube-301926.jpg";
import thirdCarouselImage from "../../image/books-classroom-close-up-college-289737.jpg";

function Carousels() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={firstCarouselImage}
            alt='First slide'
          />
          <Carousel.Caption className='bg-dark px-3'>
            <h3>ACCELERATING DISCOVERY</h3>
            <p>
              Research Journals accelerates the dissemination of knowlege
              throuth the publication of high quality research articles using
              the open access model
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={secondCarouselImage}
            alt='Second slide'
          />

          <Carousel.Caption className='bg-dark px-3'>
            <h3>ACCELERATING DISCOVERY</h3>
            <p>
              Research Journals accelerates the dissemination of knowlege
              throuth the publication of high quality research articles using
              the open access model
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={thirdCarouselImage}
            alt='Third slide'
          />

          <Carousel.Caption className='bg-dark px-3'>
            <h3>ACCELERATING DISCOVERY</h3>
            <p>
              Research Journals accelerates the dissemination of knowlege
              throuth the publication of high quality research articles using
              the open access model
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
