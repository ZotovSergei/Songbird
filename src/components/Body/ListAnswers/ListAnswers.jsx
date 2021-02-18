import React from 'react'
import Item from '../ListAnswers/Item/Item'

export default function ListAnswers(props) {
  const { birds, handlerClick,viewElementQuestions } = props
  const answers = Object.values(birds)

  const buttonList = answers.map((el, iDx) => (
    <Item
      key={iDx.toString()}
      id={el.en}
      name={el.ru.toUpperCase()}
      answer={el.answer}
      handlerClick={handlerClick}
      viewElementQuestions={viewElementQuestions}
    />
  ))

  return (
    <section className="list__answers">
      <ul >{buttonList}</ul>
    </section>
  )
}
