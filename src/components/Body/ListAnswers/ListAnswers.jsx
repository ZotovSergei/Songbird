import React from 'react'
import Item from '../ListAnswers/Item/Item'

export default function ListAnswers(props) {
  const { birds } = props
  const answers = Object.values(birds)
  const buttonList = answers.map((el, iDx) => (
    <Item
      key={iDx.toString()}
      id={Object.keys(el)[0]}
      name={el[Object.keys(el)[0]]}
      answer={el.answer}
    />
  ))

  return (
    <section className="list__answers">
      <ul>{buttonList}</ul>
    </section>
  )
}
