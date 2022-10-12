import React from "react";
import { useParams } from "react-router-dom";
// import JournalData from "../../data/journals";

function JournalCategoryDetails(props) {
  const { id } = useParams();
  console.log(props);
  return (
    <div>
      <h2>JournalCategoryDetails - {id}</h2>
    </div>
  );
}

export default JournalCategoryDetails;
