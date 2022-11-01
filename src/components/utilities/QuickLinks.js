import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function QuickLinks() {
  return (
    <aside style={{ lineHeight: "2" }} className='bg-dark p-3'>
      <h2 className='text-white'>Quick Links</h2>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <Link className='text-decoration-none fw-bold' to={"/"}>
            Home
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link className='text-decoration-none fw-bold' to={"/journals"}>
            Journals
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link className='text-decoration-none fw-bold' to={"/call_for_paper"}>
            Call For Paper
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link className='text-decoration-none fw-bold' to={"/contact_us"}>
            Contact Us
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </aside>
  );
}

export default QuickLinks;
