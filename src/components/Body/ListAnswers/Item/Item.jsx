import React from 'react'

export default function Item(props) {
  const { id, name } = props
  return (
    <button>
      <span id={id}className="unselected">{name}</span>
    </button>
  )
}
