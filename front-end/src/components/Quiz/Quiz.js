import React, {useState} from 'react';
import Question from '../Question/Question'

function Quiz(props) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState([]);
    // props.data["questions"].length > 0 && console.log(props.data["questions"][0].answers)
    if (props.data["questions"].length > 0) {
        return (
            <Question question={props.data["questions"][currentQuestion]}/>
        )
    } else {
        return null;
    }
}

export default Quiz;