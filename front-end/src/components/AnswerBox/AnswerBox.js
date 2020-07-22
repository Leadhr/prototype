import React, { useEffect, useState } from "react";
import Answer from "../Answer/Answer";

function AnswerBox(props) {
  const [show, setShow] = useState([true, true, true]);
  //reset show on new question
  useEffect(() => {
    setShow([true, true, true]);
  }, [props.currentQuestion]);
  function handleShow(bool, index) {
    const showArray = show.slice();
    showArray[index] = bool;
    setShow(showArray);
  }
  return (
    <div>
      {
        //instead of writing all of this 3 times for 3 answer elements, i just made an array [0,1,2] and mapped over it to return 3 elements
        //using the element to access the proper answer
        [0, 1, 2].map((element) => {
          if (show[element]) {
            return (
              <Answer
                key={element}
                show={show[element]}
                setShow={handleShow}
                answer={props.answers[element]}
                responseBank={props.responseBank}
                setResponseBank={props.setResponseBank}
                currentQuestion={props.currentQuestion}
                setCurrentQuestion={props.setCurrentQuestion}
                currentStage={props.currentStage}
                setCurrentStage={props.setCurrentStage}
                complete={props.complete}
                setComplete={props.setComplete}
                submitResponse={props.submitResponse}
              />
            );
          }
        })
      }
      {/* <Answer answer={props.answers[0]} />
          <Answer answer={props.answers[1]} />
          <Answer answer={props.answers[2]} /> */}
    </div>
  );
}

export default AnswerBox;
