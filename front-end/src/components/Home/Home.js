import React, {useEffect, useState} from 'react';
import Quiz from '../Quiz/Quiz'
import "../../assets/style.css"

function Home(props) {
    const [questions, setQuestions] = useState({questions: []})
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('/api/questions')
        .then(res => res.json())
        .then((data) => {
            setQuestions({questions: data})
        })
        .catch(console.log)
    }, []);
    // console.log(questions)
    return(
        <Quiz data={questions}/>
    )
}

export default Home;