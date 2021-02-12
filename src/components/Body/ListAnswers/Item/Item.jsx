import React from 'react'

export default function Item(props) {
  const { id, name, answer } = props
  return (
    <li key={id + '__click__' + name}>
      <button
        onClick={() => console.log(props)}
        key={id + '__' + name}
        id={id}
        className="unselected"
      >
        {name}
      </button>
    </li>
  )
}
