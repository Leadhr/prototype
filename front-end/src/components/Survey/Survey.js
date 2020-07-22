import React, { useState, useEffect } from "react";
import SurveyBox from "../SurveyBox/SurveyBox";
import Submitted from "../Submitted/Submitted"

function Survey() {
  //contains all survey information
  //format: array with 56 elements
  //example element
  //   {
  //     "question-id": 1,
  //     "number": 2,
  //     "question": "Of these three options, which is most important to you?",
  //     "answers": [
  //       {
  //         "answer-id": 1,
  //         "text": "Choosing my own path"
  //       },
  //       {
  //         "answer-id": 2,
  //         "text": "Putting others at ease"
  //       },
  //       {
  //         "answer-id": 3,
  //         "text": "Committing to a solid plan"
  //       }
  //     ]
  //   }
  const [questionBank, setQuestionBank] = useState([]);
  //responses are modeled with an array of 56 elements. these elements are arrays of 2 elements - initialized to null
  const [responseBank, setResponseBank] = useState(
    new Array(56).fill([null, null])
  );
  //tracks the current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //questions have two stages - picking your first and second choice
  const [currentStage, setCurrentStage] = useState(0);
  const [complete, setComplete] = useState(false)

  //fetch questions
  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestionBank(data);
      })
      .catch(console.log);
  }, []);

  function handleSetResponseBank(response, index) {
    const newResponseBank = responseBank.slice();
    newResponseBank[index] = response;
    setResponseBank(newResponseBank);
  }

  function handleSetCurrentQuestion(number) {
    setCurrentQuestion(number);
  }

  function handleSetCurrentStage(number) {
    setCurrentStage(number)
  }

  function handleSetComplete(bool) {
      setComplete(bool)
  }

  if (questionBank.length > 0) {
    
    if (complete) {
        return <Submitted />
    } else {
        return (
            <SurveyBox
              questionBank={questionBank}
              responseBank={responseBank}
              setResponseBank={handleSetResponseBank}
              currentQuestion={currentQuestion}
              setCurrentQuestion={handleSetCurrentQuestion}
              currentStage={currentStage}
              setCurrentStage={handleSetCurrentStage}
              complete={complete}
              setComplete={handleSetComplete}
            />
          );
    }

  } else {
    return null;
  }
}

export default Survey;
