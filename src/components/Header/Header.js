import React from 'react'
import TypeQuestions from '../Header/TypeQuestions'
import Score from '../Header/Score'

export default function Header(props) {
    const { count, typeQuestions } = props;
    return (
        <div className="header">
            <h1>Songbird</h1>
            <TypeQuestions questions={typeQuestions} />
            <Score count={count} />
        </div>
    )
}
