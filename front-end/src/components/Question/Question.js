import React from "react";

function Question(props) {
  return (
    <div>
      <p>
        {props.question["question-id"]}) {props.question["question"]}
      </p>
      <ol>
        <li>{props.question.answers[0].text}</li>
        <li>{props.question.answers[1].text}</li>
        <li>{props.question.answers[2].text}</li>
      </ol>
    </div>
  );
}

export default Question;
