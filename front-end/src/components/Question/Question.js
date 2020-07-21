import React from "react";
import QuestionPrompt from '../QuestionPrompt/QuestionPrompt'
import QuestionAnswers from "../QuestionAnswers/QuestionAnswers";

function Question(props) {
  return (
    // <div>
    //   <p>
    //     {props.question["question-id"]}) {props.question["question"]}
    //   </p>
    //   <ol>
    //     <li>{props.question.answers[0].text}</li>
    //     <li>{props.question.answers[1].text}</li>
    //     <li>{props.question.answers[2].text}</li>
    //   </ol>
    // </div>
    <div>
      <QuestionPrompt prompt={props.question["question"]} />
      <QuestionAnswers answers={props.question.answers} />
    </div>
  );
}

export default Question;
