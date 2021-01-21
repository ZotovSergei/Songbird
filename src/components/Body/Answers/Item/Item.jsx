import React from 'react'

export default function Item(props) {
  const { name } = props
  return (
    <button>
      <span className="unselected"></span>
      {name}
    </button>
  )
}
