import React from 'react'
import AnswersUI from '../../../components/Body/Answers/Answers'
import Owl from '../../../store/assets/images/owl.jpg'
import ListAnswers from '../ListAnswers/ListAnswers'
import styles from './Answers.module.css'

export default function Answers(props) {
  const { groupBirds,handlerClick,viewElementsAnswers,viewElementQuestions } = props
  const answer = groupBirds.filter((item) => {
    return item.answer != null
  })
  const title = 'Owl'
  const description =
    'Dolore proident culpa ad duis laborum. Nisi qui ut aute laborum sit veniam sit officia nostrud ipsum commodo velit. Aliquip et ex qui culpa quis.'
  return (
    <div className={styles.data}>
      <AnswersUI
        title={viewElementsAnswers ? answer[0].ru : '????'}
        description={viewElementQuestions ? description : false}
        photo={(!!answer[0] && viewElementsAnswers) ? answer[0].photo : null}
        viewElementsAnswers={viewElementsAnswers}
        generateId = {styles.question}
        enabled={viewElementQuestions}
      />
      <ListAnswers groupAnswers={groupBirds} handlerClick={handlerClick} viewElementQuestions={viewElementQuestions}/>
      <AnswersUI
        title={!!answer[0] && viewElementsAnswers ? answer[0].ru : '????'}
        description={viewElementsAnswers ? description : false}
        photo={(!!answer[0] && viewElementsAnswers) ? answer[0].photo : null}
        viewElementsAnswers = {viewElementsAnswers}
        generateId = {styles.answer}
        enabled={viewElementsAnswers}
      />
    </div>
  )
}
