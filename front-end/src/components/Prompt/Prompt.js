import React from 'react';

function Prompt(props){
    //takes question prompt as a prompt and return the html
    return <p>{props.number}. {props.prompt}</p>
}

export default Prompt;