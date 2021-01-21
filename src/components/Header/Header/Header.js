import React from 'react'
import TypeQuestions from '../TypeQuestions'
import Score from '../Score'
import styles from './Header.module.css'

export default function Header(props) {
  const { count, typeQuestions } = props
  return (
    <div className="header">
      <h1 className={styles.title}>Songbird</h1>
      <TypeQuestions questions={typeQuestions} />
      <Score count={count} />
    </div>
  )
}
