import React from 'react'

export default function NextButton(props) {
  const { handlerClick,category,isDisabled } = props
  return (
    <button className="button__next" onClick={handlerClick} disabled={isDisabled}>
      {category > 1 ? 'Next level'.toLocaleUpperCase() : 'Start'.toLocaleUpperCase()}
    </button>
  )
}
