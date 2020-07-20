import React, {useState} from 'react';

function Quiz(props) {
    const [answers, setAnswers] = useState([]);
    props.data["questions"].length > 0 && console.log(props.data["questions"][0].answers)
    return (
        // <h1>{props.data["questions"][0].answers[0].text}</h1>
        <p>test</p>
    )
}

export default Quiz;