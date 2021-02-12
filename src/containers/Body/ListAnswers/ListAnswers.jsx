import React from 'react'
import ListAnswersUI from '../../../components/Body/ListAnswers/ListAnswers'

export default function ListAnswers({ groupAnswers }) {
  return (
    <div>
      <ListAnswersUI birds={groupAnswers} />
    </div>
  )
}
