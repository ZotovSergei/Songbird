import React from 'react'
import HeaderUI from '../../components/Header/Header/Header'
import { categoryQuestions } from '../../store/utils/listBirds'

export default function Header(props) {
  const typeQuestions = Object.entries(categoryQuestions)
  const count = 0
  const handlerClick = (e) => {
    console.log(e)
  }

  return (
    <div>
      <HeaderUI
        count={count}
        typeQuestions={typeQuestions}
        handler={props.handlerClick}
      />
    </div>
  )
}
