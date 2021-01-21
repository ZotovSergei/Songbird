import React from 'react'
import AnswersUI from '../../../components/Body/Answers/Answers.jsx'

export default function Answers() {
  const answers = [
    { id: '1', bird: 'Чайка' },
    { id: '2', bird: 'Павлин' },
    { id: '3', bird: 'Филин' },
    { id: '4', bird: 'Сорока' },
    { id: '5', bird: 'Ворон' },
    { id: '6', bird: 'Воробей' },
  ]
  return (
    <div>
      <AnswersUI answers={answers} />
    </div>
  )
}
