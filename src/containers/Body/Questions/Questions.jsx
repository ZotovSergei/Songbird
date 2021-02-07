import React from 'react'
import QuestionsUI from '../../../components/Body/Questions/Questions.jsx'

export default function Questions() {
  const questions = [
    { id: '1', bird: 'Чайка' },
    { id: '2', bird: 'Павлин' },
    { id: '3', bird: 'Филин' },
    { id: '4', bird: 'Сорока' },
    { id: '5', bird: 'Ворон' },
    { id: '6', bird: 'Воробей' },
  ]
  return (
    <div>
      <QuestionsUI questions={questions} />
    </div>
  )
}
