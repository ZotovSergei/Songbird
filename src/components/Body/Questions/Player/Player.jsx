import React from 'react'
import sounds from '../../../../store/assets/sounds/Tyto_soumagnei.mp3'

export default function Player(props) {
  const { title } = props
  return (
    <figure>
      <figcaption>
        <h3 className="player__caption">{title}</h3>
      </figcaption>
      <audio controls src={sounds}></audio>
    </figure>
  )
}
