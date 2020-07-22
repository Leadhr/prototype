import React, { useState } from "react";

function Answer(props) {
  function handleClick(e) {
    e.preventDefault();
    //on click, check what stage
    if (props.currentStage === 0) {
      //for stage zero we will update the response and increment the stage
      props.setResponseBank(props.answer["answer-id"], props.currentQuestion, props.currentStage);
      props.setCurrentStage(1);
      //then hide the element
      props.setShow(false, props.answer["answer-id"] - 1)
    } else {
      //for stage one we will update the response and increment the current
      //question, then set the stage to 0
      props.setResponseBank(
        props.answer["answer-id"],
        props.currentQuestion,
        props.currentStage
      );
    //   props.setShow(true, 0)
    //   props.setShow(true, 1)
    //   props.setShow(true, 2)
      //check if we are done with the survey
      if (props.currentQuestion === 55) {
        //if we are done, call submit function and set complete to true
        props.submitResponse(props.responseBank)
        props.setComplete(true);
      }
      props.setCurrentQuestion(props.currentQuestion + 1);
      props.setCurrentStage(0);
    }
    console.log(props.answer["answer-id"]);
  }
  if (props.show) {
    return (
        <div>
          <button onClick={handleClick}>{props.answer.text}</button>
          <br></br>
        </div>
      );
  } else {
      return null;
  }
}

export default Answer;
