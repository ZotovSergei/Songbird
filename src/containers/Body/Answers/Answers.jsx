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
  if (answer.length == 0) {
    let idx = Math.floor(Math.random() * 6)
    answer[0] = groupBirds[idx].answer = 'anwer';
  }
  // const title = 'Owl'
  // const description =
  //   'Dolore proident culpa ad duis laborum. Nisi qui ut aute laborum sit veniam sit officia nostrud ipsum commodo velit. Aliquip et ex qui culpa quis.'
  return (
    <div className={styles.data}>
      <AnswersUI
        title={viewElementsAnswers ? answer[0].ru : '\u2605\u2605\u2605\u2605\u2605'}
        description={false ? answer[0].description : false}
        photo={(!!answer[0] && viewElementsAnswers) ? answer[0].image : null}
        viewElementsAnswers={viewElementsAnswers}
        generateId = {styles.question}
        enabled={true}
        customStyle={'question'}
        sound={answer[0].audio || false}
      />
      <ListAnswers groupAnswers={groupBirds} handlerClick={handlerClick} viewElementQuestions={true}/>
      <AnswersUI
        title={!!answer[0] && viewElementsAnswers ? answer[0].ru : '????'}
        description={viewElementsAnswers ? answer[0].description : false}
        photo={(!!answer[0] && viewElementsAnswers) ? answer[0].image : null}
        viewElementsAnswers = {viewElementsAnswers}
        generateId = {styles.answer}
        enabled={viewElementsAnswers}
        customStyle={'answer'}
        customClass={styles.answer}
        sound={viewElementsAnswers ? answer[0].audio : false}
      />
    </div>
  )
}
