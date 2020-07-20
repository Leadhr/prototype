import React from 'react';
import Question from '../Question/Question';

function Questions(props) {
    // console.log(props.data["questions"])
    return (
        // <p>work in progress</p>
        props.data["questions"].map((data) => {
            return <Question question={data} key={data['question-id']} />
        })
    )
}

export default Questions;