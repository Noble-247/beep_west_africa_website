import React, { Fragment } from "react";
import SpinnerImage from "../../image/utility_photos/Spinner-1s-200px.gif";

function Spinner() {
  return (
    <Fragment>
      <img
        src={SpinnerImage}
        alt='Loading...'
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
}

export default Spinner;
