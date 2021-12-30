import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Link } from "react-router-dom";
function Four0four() {
  return (
    <div className="four">
      <h1>I Think You Are Lost Buddy</h1>
      <Link to="/">Click Here To Continue Shopping</Link>
      <div>
        <SentimentVeryDissatisfiedIcon className="sad-icon" />
      </div>
    </div>
  );
}

export default Four0four;
