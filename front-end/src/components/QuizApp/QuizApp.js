import React, { Component } from "react";
import "../../assets/style.css";
import QuestionBox from "../QuestionBox/QuestionBox";
import Result from "../Result/Result";

class QuizApp extends Component {
  state = {
    questionBank: [],
    responseBank: new Array(112).fill(null),
    responses: 0,
  };
  //function to fetch data from mock api
  getQuestions = () => {
    // GET request using fetch inside useEffect React hook
    fetch("/api/questions")
    .then((res) => res.json())
    .then((data) => {
      this.setState({ questionBank: data });
    })
    .catch(console.log);
  };
//   needs to be changed to store answer instead of compute answer
  storeAnswer = (answer, index) => {
    const newResponseBank = this.state.responseBank.slice()
    newResponseBank[index] = answer 
    this.setState({responseBank: newResponseBank})
  };

//remove play again

//   playAgain = () => {
//     this.getQuestions();
//     this.setState({
//       score: 0,
//       responses: 0,
//     });
//   };
  //runs when component is rendered
  componentDidMount() {
    //initialize state with data
    this.getQuestions();
  }
  render() {
    console.log(this.state.questionBank[0])
    return (
    //   <div className="container">
    //     <div className="title">Quiz App</div>
    //     {/* if this.state.questionBank is not empty */}
    //     {this.state.questionBank.length > 0 &&
    //       // map through the array of question data
    //       this.state.questionBank.map(
    //         // for each question, return an h4 element with "question" as the text
    //         ({ question, answers, correct, questionId }) => (
    //           <QuestionBox
    //             question={question}
    //             options={answers}
    //             key={questionId}
    //             selected={(answer) => this.computeAnswer(answer, correct)}
    //           />
    //         )
    //       )}
    //     {this.state.responses === 5 ? (
    //       <Result score={this.state.score} playAgain={this.playAgain} />
    //     ) : null}
    //   </div>
        null
    );
  }
}

export default QuizApp;
