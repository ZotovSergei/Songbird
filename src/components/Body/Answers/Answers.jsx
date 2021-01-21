import React from 'react'
import Item from '../Answers/Item/Item'

export default function Answers(props) {
  const { answers } = props
  const elements = answers.map((item) => (
    <li key={item.id + '_' + item.bird}>
      <Item name={item.bird} />
    </li>
  ))
  return <ul>{elements}</ul>
}
