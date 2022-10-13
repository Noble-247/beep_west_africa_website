import React from "react";
import { useParams } from "react-router-dom";
import JournalData from "../../data/journals";

function JournalCategoryDetails(props) {
  const { journal_category_ID } = useParams();
  //   console.log(journal_category_ID);

  const thisJournalCategory = JournalData.filter((obj) => {
    return obj.id === parseInt(journal_category_ID);
  });
  //   console.log(thisJournalCategory);

  return (
    <div>
      <h2>JournalCategoryDetails - {journal_category_ID}</h2>
      <h1>
        {thisJournalCategory.map((journal) => {
          return journal.category;
        })}
      </h1>
    </div>
  );
}

export default JournalCategoryDetails;
