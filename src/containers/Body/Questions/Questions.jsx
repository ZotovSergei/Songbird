import React from 'react'
import QuestionsUI from '../../../components/Body/Questions/Questions.jsx'

export default function Questions(props) {
  const { questions } = props
  return (
    <div>
      <QuestionsUI questions={questions} />
    </div>
  )
}
