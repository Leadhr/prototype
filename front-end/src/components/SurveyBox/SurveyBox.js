import React from "react";
import Prompt from "../Prompt/Prompt";
import AnswerBox from "../AnswerBox/AnswerBox";
import Card from "react-bootstrap/Card";

function SurveyBox(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>
        <Prompt
          number={props.questionBank[props.currentQuestion]["question-id"]}
          prompt={props.questionBank[props.currentQuestion]["question"]}
          className={"question"}
        />
      </Card.Header>
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
    </Card>
  );
}

export default SurveyBox;
