import React from 'react'
import PhotoBird from './PhotoBird/PhotoBird'
import Player from './Player/Player'
import DescriptionBirds from './DescriptionBirds/DescriptionBirds'
import styles from './Answers.module.css'

export default function Answers(props) {
  const { title, description, photo, viewElementsAnswers, enabled, generateId, customStyle ,customClass,sound} = props
  return (
    <div id={generateId} className={styles.question+" "+customClass}>
      {enabled ? <PhotoBird photo={photo} enabled={viewElementsAnswers} style={customStyle}/> : false}
      <Player title={title.toUpperCase()} enabled={enabled} sound={sound}/>
      <DescriptionBirds description={description} enabled={viewElementsAnswers}/>
    </div>
  )
}
