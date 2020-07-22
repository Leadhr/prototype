import React from "react";
import Prompt from "../Prompt/Prompt";
import AnswerBox from "../AnswerBox/AnswerBox";

function SurveyBox(props) {

  return (
    <div>
      <Prompt
        number={props.questionBank[props.currentQuestion]["question-id"]}
        prompt={props.questionBank[props.currentQuestion]["question"]}
      />
      <AnswerBox
        answers={props.questionBank[props.currentQuestion]["answers"]}
        responseBank={props.responseBank}
        setResponseBank={props.setResponseBank}
        currentQuestion={props.currentQuestion}
        setCurrentQuestion={props.setCurrentQuestion}
        currentStage={props.currentStage}
        setCurrentStage={props.setCurrentStage}
        complete={props.complete}
        setComplete={props.setComplete}
      />
    </div>
  );
}

export default SurveyBox;
