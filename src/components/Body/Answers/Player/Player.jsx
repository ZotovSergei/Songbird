import React from 'react'
import sounds from '../../../../store/assets/sounds/Tyto_soumagnei.mp3'
import styles from './Player.module.css'

export default function Player(props) {
  const { title,enabled } = props
  return (
    <figure className={styles.player}>
      <figcaption>
        <h3 className="player__caption">{enabled ? title : false}</h3>
      </figcaption>
      {enabled ? <audio controls src={sounds}></audio> :  false}
    </figure>
  )
}
