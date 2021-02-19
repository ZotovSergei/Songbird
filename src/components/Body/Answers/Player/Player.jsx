import React from 'react'
// import sounds from '../../../../store/assets/sounds/Tyto_soumagnei.mp3'
import styles from './Player.module.css'

export default function Player(props) {
  const { title,enabled,sound } = props
  return (
    <figure className={styles.player}>
      <figcaption>
        <h3 className={styles.player__caption}>{enabled ? title : false}</h3>
      </figcaption>
      {enabled ? <audio controls src={sound}></audio> :  false}
    </figure>
  )
}
