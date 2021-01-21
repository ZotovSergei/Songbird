import React from 'react'

export default function NextButton(props) {
  const { handlerClick } = props
  return (
    <button className="button__next" onClick={handlerClick}>
      Next level
    </button>
  )
}
