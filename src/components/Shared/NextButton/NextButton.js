import React from 'react'

export default function NextButton(props) {
  const { handlerClick,category } = props
  return (
    <button className="button__next" onClick={handlerClick}>
      {category > 1 ? 'Next level'.toLocaleUpperCase() : 'Start'.toLocaleUpperCase()}
    </button>
  )
}
