import React from 'react'
import styles from './PhotoBird.module.css'

export default function PhotoBird(props) {
  const { photo, enabled, style } = props
  const elementPhoto = !!enabled ? 
  (<div className={styles.photo__wrapper + ' ' + style}>
      <img className={styles.photo + " " +style} src={photo} alt="owl"/></div>
  ) 
  : <div className={styles.hide__answer + ' ' + style}>
      <span>Image</span>
    </div>
  return elementPhoto
}
