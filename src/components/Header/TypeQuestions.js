import React from 'react'

export default function TypeQuestions(props) {
  const { questions, handler } = props

  const liQuestions = questions.map((item, index) => (
    <li key={item[0] + '_' + index} className="title">
      <button id={item[0]} onClick={handler}>
        {item[1]}
      </button>
    </li>
  ))
  return <ul className="header__questions">{liQuestions}</ul>
}
