import React from "react";

function Answer(props) {
  function handleClick(e) {
    e.preventDefault();
    const id = props.answer["answer-id"]
    const stage = props.currentStage;
    //on click, check what stage
    if (stage === 0) {
        //for stage zero we will update the response and increment the stage
        props.setResponseBank(id, stage)
        props.setCurrentStage(1)
    } else {
        //for stage one we will update the response and increment the current 
        //question, then set the stage to 0
        props.setResponseBank(id, stage)
        //check if we are done with the survey
        if (props.currentQuestion === 55) {
            //if we are done, set complete to true
            props.setComplete(true)
        }
        props.setCurrentQuestion(props.currentQuestion + 1)
        props.setCurrentStage(0)
    } 
    console.log(props.answer["answer-id"]);
  }
  return (
    <div>
      <button onClick={handleClick}>{props.answer.text}</button>
      <br></br>
    </div>
  );
}

export default Answer;
