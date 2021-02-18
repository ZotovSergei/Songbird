import React from 'react'
import ListAnswersUI from '../../../components/Body/ListAnswers/ListAnswers'
import styles from './ListAnswers.module.css'

export default function ListAnswers({ groupAnswers,handlerClick,viewElementQuestions }) {
  return (
    <section id={styles.list_answer}>
      <ListAnswersUI birds={groupAnswers} handlerClick={handlerClick} viewElementQuestions={viewElementQuestions}/>
    </section>
  )
}
