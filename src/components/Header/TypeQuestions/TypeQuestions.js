import React from 'react'
import styles from './TypeQuestions.module.css'

export default function TypeQuestions(props) {
  const { questions, handler } = props

  const liQuestions = questions.map((item, index) => (
    <li key={item[0] + '_' + index}>
      <button className={styles.category__button + " category_button"} id={item[0]} onClick={handler}>
        {item[1]}
      </button>
    </li>
  ))
  return <ul id={styles.categoryId} className={styles.header__questions}>{liQuestions}</ul>
}
