import CountDownTimer from "../utilities/CountDownTimer";
import TypeWriterAnimation from "../utilities/TypeWriterAnimation";
import { Button, Container } from "react-bootstrap";

function SiteUnderConstruction(props) {
  return (
    <div className='site-under-maintenance'>
      <Container>
        <CountDownTimer targetDate='2024-12-31T00:00:00' />
        <TypeWriterAnimation />
        <p>
          BEEP WESTAFRICA is a peer-reviewed International Journal Research
          Organization of high editorial quality. BEEP is also a universally
          accessible online journal. The journal publishes researched articles
          in all areas of science, art, management and technology
        </p>
        <Button
          className='btn btn-secondary d-block mx-auto mt-3 fw-bold'
          onClick={() => props.showMainContent()}
        >
          CLICK TO EXPLORE THE WEBSITE
        </Button>
      </Container>
    </div>
  );
}

export default SiteUnderConstruction;
