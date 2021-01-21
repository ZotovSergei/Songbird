import React from 'react'

export default function TypeQuestions(props) {
    const { questions } = props;
    const liQuestions = questions.map((item, index) => <li key={item + "_" + index} className="title">{item}</li>)
    return (
        <ul className="header__questions">
            {liQuestions}
        </ul>
    )
}
