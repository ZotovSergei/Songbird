import React from 'react'
import styles from './PhotoBird.module.css'

export default function PhotoBird(props) {
  const { photo, enabled } = props
  const elementPhoto = !!enabled ? (<div className={styles.photo__wrapper}><img className={styles.photo} src={photo} alt="owl"/></div>) : <div className={styles.hide__answer}></div>
  return elementPhoto
}
