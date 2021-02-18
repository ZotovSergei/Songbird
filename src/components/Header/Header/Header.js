import React from 'react'
import TypeQuestions from '../TypeQuestions/TypeQuestions'
import Score from '../Score/Score'
import styles from './Header.module.css'

export default function Header(props) {
  const { count, typeQuestions, handler } = props
  return (
    <div className={styles.header}>
      <h1 id={styles.titleId} className={styles.title}>Songbird</h1>
      <Score count={count} />
      <TypeQuestions questions={typeQuestions} handler={handler} />
      </div>
  )
}
