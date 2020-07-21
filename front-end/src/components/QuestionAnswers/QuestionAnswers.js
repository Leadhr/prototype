import React from 'react';

function QuestionAnswers(props) {
    if (props.answers.length > 0) {
        return (
            <ol>
                <li>{props.answers[0].text}</li>
                <li>{props.answers[1].text}</li>
                <li>{props.answers[2].text}</li>
            </ol>
        )
    } else {
        return null;
    }
}

export default QuestionAnswers;