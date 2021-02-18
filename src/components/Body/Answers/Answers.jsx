import React from 'react'
import PhotoBird from './PhotoBird/PhotoBird'
import Player from './Player/Player'
import DescriptionBirds from './DescriptionBirds/DescriptionBirds'
import styles from './Answers.module.css'

export default function Answers(props) {
  const { title, description, photo, viewElementsAnswers, enabled, generateId } = props
  
  return (
    <div id={generateId} className={styles.question}>
      <PhotoBird photo={photo} enabled={viewElementsAnswers}/>
      <Player title={title} enabled={enabled}/>
      <DescriptionBirds description={description} enabled={viewElementsAnswers}/>
    </div>
  )
}
